import { signal, computed, type Signal } from '@preact/signals'

export type HumanType = 'man' | 'woman' | 'child' | 'family'

const HUMAN_EMOJIS: Record<HumanType, string> = {
  man: '👨',
  woman: '👩',
  child: '🧒',
  family: '👨‍👩‍👧‍👦',
}

const HUMAN_COUNT: Record<HumanType, number> = {
  man: 1,
  woman: 1,
  child: 1,
  family: 4,
}

export class HumanStore {
  #humans: Record<HumanType, Signal<number>>

  constructor() {
    this.#humans = {
      man: signal(0),
      woman: signal(0),
      child: signal(0),
      family: signal(0),
    }
  }

  get counts() {
    return this.#humans
  }

  add(type: HumanType) {
    this.#humans[type].value++
  }

  remove(type: HumanType) {
    if (this.#humans[type].value > 0) {
      this.#humans[type].value--
    }
  }

  get total() {
    return computed(() =>
      Object.entries(this.#humans).reduce(
        (sum, [type, s]) => sum + s.value * HUMAN_COUNT[type as HumanType],
        0
      )
    )
  }

  getEmoji(type: HumanType) {
    return HUMAN_EMOJIS[type]
  }

  getCount(type: HumanType) {
    return HUMAN_COUNT[type]
  }

  get types(): HumanType[] {
    return Object.keys(HUMAN_EMOJIS) as HumanType[]
  }
}
