import { useStore } from '../../store'

export function TreesSection() {
  const store = useStore()

  return (
    <section class="mb-3 p-2 bg-emerald-50 rounded-lg border border-emerald-200">
      <h2 class="text-sm font-semibold mb-2">Trees</h2>
      <div class="flex gap-1 flex-wrap">
        {store.trees.types.map((type) => (
          <button
            key={type}
            onClick={() => store.trees.add(type)}
            class="text-xl p-1 hover:bg-emerald-100 rounded transition-colors cursor-pointer"
            title={`Add ${type}`}
          >
            {store.trees.getEmoji(type)}
          </button>
        ))}
      </div>
    </section>
  )
}
