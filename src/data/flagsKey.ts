import { PerformanceFlag, PerformanceFlagDetail } from '../types'

const flagsKey: Record<PerformanceFlag, PerformanceFlagDetail> = {
    'assisted-hearing': {
        emoji: '👂',
        label: 'Assisted Hearing',
    },
    'audio-description': {
        emoji: '💬',
        label: 'Audio Description',
    },
    relaxed: {
        emoji: '🤗',
        label: 'Relaxed Performance',
    },
    asl: {
        emoji: '👌',
        label: 'ASL',
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
    preview: {
        emoji: '👁️',
        label: 'Preview Performance',
    },
}

export default flagsKey
