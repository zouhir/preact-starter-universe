import { createContext } from 'preact'
import { useContext } from 'preact/hooks'
import { computed } from '@preact/signals'
import { AnimalStore, type AnimalType } from './AnimalStore'
import { HumanStore } from './HumanStore'
import { TreeStore } from './TreeStore'

export type { AnimalType } from './AnimalStore'
export type { HumanType } from './HumanStore'
export type { TreeType } from './TreeStore'

export class AppModel {
  #animals: AnimalStore
  #humans: HumanStore
  #trees: TreeStore

  constructor() {
    this.#animals = new AnimalStore()
    this.#humans = new HumanStore()
    this.#trees = new TreeStore()
  }

  get animals() {
    return this.#animals
  }

  get humans() {
    return this.#humans
  }

  get trees() {
    return this.#trees
  }

  get totalPopulation() {
    return computed(() =>
      this.#animals.total.value + this.#humans.total.value + this.#trees.total.value
    )
  }

  get animalPercentages() {
    return computed(() => {
      const total = this.#animals.total.value
      if (total === 0) return {} as Record<AnimalType, number>

      const result: Partial<Record<AnimalType, number>> = {}
      for (const type of this.#animals.types) {
        const count = this.#animals.counts[type].value
        if (count > 0) {
          result[type] = Math.round((count / total) * 100)
        }
      }
      return result as Record<AnimalType, number>
    })
  }

  get populationBreakdown() {
    return computed(() => {
      const animals = this.#animals.total.value
      const humans = this.#humans.total.value
      const trees = this.#trees.total.value
      const total = animals + humans + trees

      if (total === 0) {
        return { animals: 0, humans: 0, trees: 0 }
      }

      return {
        animals: Math.round((animals / total) * 100),
        humans: Math.round((humans / total) * 100),
        trees: Math.round((trees / total) * 100),
      }
    })
  }
}

const StoreContext = createContext<AppModel>(null!)

export function StoreProvider({ children }: { children: preact.ComponentChildren }) {
  const store = new AppModel()
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export function useStore() {
  return useContext(StoreContext)
}
