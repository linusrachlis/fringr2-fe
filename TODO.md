# TODO

## Tech debt

* Simplify calendar item style to mostly use opacity to indicate selection, except border style and text line-through

## Must have

* Add show flags
* Export to ical
* Better colours (and further distinction for colour-blindness)
* Save selected shows and selected perfs to localStorage
* Better design
  + Apply CSS framework?
  + Put selection in hide-able sidebar
  + Use min-width for calendar so it doesn't get too squashed on small screens (on mobile, have to H-scroll)

## Would be nice

* Undo (d'oh, I didn't mean to select that one and now I lost the selection I wanted)
  - Or confirm switching selection if show is already scheduled
* Button to expand/collapse additional info for all calendar items
* Indicate a show you haven't scheduled yet
* Export selections to file and import from upload
* Warn if you select overlapping (or close?) performances
* Button on calendar-item: show popup venue map
* Select two calendar items to show map directions
* Magically compute unique colour from play title
* Indicate if a show is sold out (requires backend service constantly updating, or on-demand fetch and crawl from FE code)
* Restrict show times you're interested in
* Ability to share your gcal so it can be overlaid on the UI?
  + Either through URL or by exporting ical from gcal?
