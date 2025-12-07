import { useStore } from '../../store'

export function AnimalsSection() {
  const store = useStore()

  return (
    <section class="mb-3 p-2 bg-green-50 rounded-lg border border-green-200">
      <h2 class="text-sm font-semibold mb-2">Animals</h2>
      <div class="flex gap-1 flex-wrap">
        {store.animals.types.map((type) => (
          <button
            key={type}
            onClick={() => store.animals.add(type)}
            class="text-xl p-1 hover:bg-green-100 rounded transition-colors cursor-pointer"
            title={`Add ${type}`}
          >
            {store.animals.getEmoji(type)}
          </button>
        ))}
      </div>
    </section>
  )
}
