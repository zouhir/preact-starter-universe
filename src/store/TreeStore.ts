import { signal, computed, type Signal } from '@preact/signals'

export type TreeType = 'deciduous' | 'evergreen' | 'palm' | 'cactus'

const TREE_EMOJIS: Record<TreeType, string> = {
  deciduous: '🌳',
  evergreen: '🌲',
  palm: '🌴',
  cactus: '🌵',
}

export class TreeStore {
  #trees: Record<TreeType, Signal<number>>

  constructor() {
    this.#trees = {
      deciduous: signal(0),
      evergreen: signal(0),
      palm: signal(0),
      cactus: signal(0),
    }
  }

  get counts() {
    return this.#trees
  }

  add(type: TreeType) {
    this.#trees[type].value++
  }

  remove(type: TreeType) {
    if (this.#trees[type].value > 0) {
      this.#trees[type].value--
    }
  }

  get total() {
    return computed(() =>
      Object.values(this.#trees).reduce((sum, s) => sum + s.value, 0)
    )
  }

  getEmoji(type: TreeType) {
    return TREE_EMOJIS[type]
  }

  get types(): TreeType[] {
    return Object.keys(TREE_EMOJIS) as TreeType[]
  }
}
