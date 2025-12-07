import { useStore } from '../../store'

export function HumansSection() {
  const store = useStore()

  return (
    <section class="mb-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
      <h2 class="text-sm font-semibold mb-2">Humans</h2>
      <div class="flex gap-1 flex-wrap">
        {store.humans.types.map((type) => (
          <button
            key={type}
            onClick={() => store.humans.add(type)}
            class="text-xl p-1 hover:bg-blue-100 rounded transition-colors cursor-pointer"
            title={`Add ${type} (+${store.humans.getCount(type)})`}
          >
            {store.humans.getEmoji(type)}
          </button>
        ))}
      </div>
    </section>
  )
}
