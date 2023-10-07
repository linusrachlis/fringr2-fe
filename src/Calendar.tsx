import React from "react";
import moment from "moment";

import flagsKey from "./data/flagsKey.js";

import "./styles/Calendar.css";
import { TOGGLE_SELECT_PERF, useAppDispatch, useAppState } from "./AppContext.js";

const numCssColours = 16;

export default function Calendar() {
  const appState = useAppState()
  if (appState.selectedShows.length === 0) {
    return null;
  }

  // Create chronologically ordered list of performances
  const days = [];
  const perfsByDay = {};

  const referenceStartOfDay = moment().startOf("day");
  let minStartTime;
  let maxEndTime;

  appState.selectedShows.forEach((show) => {
    show.perfs.forEach(
      ({ id: perfId, flags, start: startString, end: endString }) => {
        const start = moment(startString);
        const end = moment(endString);

        const startTime = referenceStartOfDay
          .clone()
          .add(start.diff(start.clone().startOf("day")), "milliseconds");
        const endTime = referenceStartOfDay
          .clone()
          .add(end.diff(end.clone().startOf("day")), "milliseconds");

        // TODO check timezone logic
        if (minStartTime === undefined || startTime.isBefore(minStartTime))
          minStartTime = startTime;
        if (maxEndTime === undefined || endTime.isAfter(maxEndTime))
          maxEndTime = endTime;

        const dayString = start.format("YYYY-MM-DD");

        if (!(dayString in perfsByDay)) {
          days.push(dayString);
          perfsByDay[dayString] = [];
        }

        const colourIndex = show.id % numCssColours;

        perfsByDay[dayString].push({
          title: show.title,
          showId: show.id,
          perfId,
          flags,
          url: show.url,
          venue: show.venue,
          address: show.address,
          startString,
          endString,
          start,
          end,
          startTime,
          endTime,
          colourIndex,
        });
      }
    );
  });

  const timeRange = maxEndTime.diff(minStartTime);

  days.sort();

  return (
    <ul className="calendar">
      {days.map((dayString) => (
        <CalendarDay
          {...{
            key: dayString,
            dayString,
            perfsByDay,
            minStartTime,
            timeRange,
          }}
        />
      ))}
    </ul>
  );
}

function CalendarDay(props) {
  const perfs = props.perfsByDay[props.dayString];
  perfs.sort((a, b) =>
    a.startString < b.startString ? -1 : b.startString < a.startString ? 1 : 0
  );

  const { minStartTime, timeRange } = props;

  const renderedPerfs = perfs.map((perf, index) => (
    <CalendarItem {...{ key: index, perf, minStartTime, timeRange }} />
  ));

  return (
    <li key={props.dayString} className="calendar-day">
      <h2>{props.dayString}</h2>
      <ul>{renderedPerfs}</ul>
    </li>
  );
}

function buildMapUrl(venue, address) {
  const encodedQuery = encodeURIComponent(`${venue}, ${address}`);
  return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
}

function CalendarItem(props) {
  const appState = useAppState()
  const appDispatch = useAppDispatch()

  const leftPercent =
    (props.perf.startTime.diff(props.minStartTime) / props.timeRange) * 100;
  const widthPercent =
    (props.perf.endTime.diff(props.perf.startTime) / props.timeRange) * 100;

  const style = {
    marginLeft: `${leftPercent}%`,
    width: `${widthPercent}%`,
  };

  const colourClassName = `calendar-item-colour-${props.perf.colourIndex}`;
  const classNames = ["calendar-item", colourClassName];

  if (props.perf.showId in appState.selectedPerfs) {
    if (appState.selectedPerfs[props.perf.showId] === props.perf.perfId) {
      // This one is selected
      classNames.push("calendar-item-selected");
    } else {
      // Another one is selected
      classNames.push("calendar-item-deselected");
    }
  }
  // Else, none is selected

  const start = props.perf.start.format("h:mma");
  const end = props.perf.end.format("h:mma");
  return (
    <li style={style} className={classNames.join(" ")}>
      <div className="start time">{start}</div>
      <div className="box">
        <h3 onClick={() => appDispatch({type: TOGGLE_SELECT_PERF, perf: props.perf})}>
          {props.perf.title}
        </h3>
        <p aria-label="Venue Map Link">
          <a
            href={buildMapUrl(props.perf.venue, props.perf.address)}
            title={props.perf.address}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.perf.venue}
          </a>
        </p>
        <p>
          <a href={props.perf.url} target="_blank" rel="noopener noreferrer">
            <span
              role="img"
              aria-label="Official web page"
              title="Official web page"
            >
              🌐
            </span>
          </a>
          {props.perf.flags.map((flag, index) => {
            if (!(flag in flagsKey)) return null;
            const flagOutput = flagsKey[flag];

            return (
              <span
                key={index}
                role="img"
                aria-label={flagOutput.label}
                title={flagOutput.label}
              >
                {flagOutput.emoji}
              </span>
            );
          })}
        </p>
      </div>
      <div className="end time">{end}</div>
    </li>
  );
}