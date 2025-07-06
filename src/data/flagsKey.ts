import { PerformanceFlag, PerformanceFlagDetail } from '../types'

const flagsKey: Record<PerformanceFlag, PerformanceFlagDetail> = {
    asl: {
        emoji: '👌',
        label: 'ASL',
    },
    'assisted-hearing': {
        emoji: '👂',
        label: 'Assisted Hearing',
    },
    'audio-description': {
        emoji: '💬',
        label: 'Audio Description',
    },
    'closed-captioning': {
        emoji: '㏄',
        label: 'Closed Captioning',
    },
    'daily-discount': {
        emoji: '💰',
        label: 'Daily Discount',
    },
    preview: {
        emoji: '👁️',
        label: 'Preview Performance',
    },
    pwyc: {
        emoji: '💸',
        label: 'Pay What You Can',
    },
    relaxed: {
        emoji: '🤗',
        label: 'Relaxed Performance',
    },
    tad: {
        emoji: '📳',
        label: 'TAD Seating',
    },
    'touch-book': {
        emoji: '📖',
        label: 'Touch Book',
    },
    'touch-tour': {
        emoji: '🖐',
        label: 'Touch Tour',
    },
}

export default flagsKey
