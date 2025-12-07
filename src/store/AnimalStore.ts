import { signal, computed, type Signal } from '@preact/signals'

export type AnimalType = 'duck' | 'cow' | 'chicken' | 'sheep'

const ANIMAL_EMOJIS: Record<AnimalType, string> = {
  duck: '🦆',
  cow: '🐄',
  chicken: '🐔',
  sheep: '🐑',
}

export class AnimalStore {
  #animals: Record<AnimalType, Signal<number>>

  constructor() {
    this.#animals = {
      duck: signal(0),
      cow: signal(0),
      chicken: signal(0),
      sheep: signal(0),
    }
  }

  get counts() {
    return this.#animals
  }

  add(type: AnimalType) {
    this.#animals[type].value++
  }

  remove(type: AnimalType) {
    if (this.#animals[type].value > 0) {
      this.#animals[type].value--
    }
  }

  get total() {
    return computed(() =>
      Object.values(this.#animals).reduce((sum, s) => sum + s.value, 0)
    )
  }

  getEmoji(type: AnimalType) {
    return ANIMAL_EMOJIS[type]
  }

  get types(): AnimalType[] {
    return Object.keys(ANIMAL_EMOJIS) as AnimalType[]
  }
}
