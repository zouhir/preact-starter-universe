import { useStore } from '../../store'

export function FarmSection() {
  const store = useStore()

  return (
    <section class="mb-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
      <h2 class="text-sm font-semibold mb-2">Farm</h2>
      <div class="min-h-[60px]">
        {store.totalPopulation.value === 0 ? (
          <p class="text-gray-500 italic text-sm">Your farm is empty. Add animals, humans, or trees above!</p>
        ) : (
          <div class="space-y-2">
            {store.animals.total.value > 0 && (
              <div>
                <h3 class="text-xs font-medium text-gray-600 mb-1">Animals:</h3>
                <div class="flex gap-0.5 flex-wrap">
                  {store.animals.types.map((type) => {
                    const count = store.animals.counts[type].value
                    return Array(count)
                      .fill(null)
                      .map((_, i) => (
                        <button
                          key={`${type}-${i}`}
                          onClick={() => store.animals.remove(type)}
                          class="text-lg hover:opacity-50 cursor-pointer transition-opacity"
                          title={`Remove ${type}`}
                        >
                          {store.animals.getEmoji(type)}
                        </button>
                      ))
                  })}
                </div>
              </div>
            )}

            {store.humans.total.value > 0 && (
              <div>
                <h3 class="text-xs font-medium text-gray-600 mb-1">Humans:</h3>
                <div class="flex gap-0.5 flex-wrap">
                  {store.humans.types.map((type) => {
                    const count = store.humans.counts[type].value
                    return Array(count)
                      .fill(null)
                      .map((_, i) => (
                        <button
                          key={`${type}-${i}`}
                          onClick={() => store.humans.remove(type)}
                          class="text-lg hover:opacity-50 cursor-pointer transition-opacity"
                          title={`Remove ${type}`}
                        >
                          {store.humans.getEmoji(type)}
                        </button>
                      ))
                  })}
                </div>
              </div>
            )}

            {store.trees.total.value > 0 && (
              <div>
                <h3 class="text-xs font-medium text-gray-600 mb-1">Trees:</h3>
                <div class="flex gap-0.5 flex-wrap">
                  {store.trees.types.map((type) => {
                    const count = store.trees.counts[type].value
                    return Array(count)
                      .fill(null)
                      .map((_, i) => (
                        <button
                          key={`${type}-${i}`}
                          onClick={() => store.trees.remove(type)}
                          class="text-lg hover:opacity-50 cursor-pointer transition-opacity"
                          title={`Remove ${type}`}
                        >
                          {store.trees.getEmoji(type)}
                        </button>
                      ))
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
