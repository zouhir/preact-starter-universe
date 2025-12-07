import { useStore, type AnimalType } from '../../store'

export function ReportingSection() {
  const store = useStore()

  return (
    <section class="p-2 bg-gray-50 rounded-lg border border-gray-200">
      <h2 class="text-sm font-semibold mb-2">Data / Reporting</h2>
      <div class="space-y-2">
        <div class="p-2 bg-white rounded border">
          <h3 class="text-xs font-medium text-gray-700">Total Population</h3>
          <p class="text-lg font-bold">{store.totalPopulation}</p>
        </div>

        <div class="p-2 bg-white rounded border">
          <h3 class="text-xs font-medium text-gray-700 mb-1">Population Breakdown</h3>
          <div class="grid grid-cols-3 gap-2">
            <div class="text-center">
              <p class="text-xs text-gray-500">Animals</p>
              <p class="text-base font-semibold">{store.animals.total}</p>
              <p class="text-xs text-gray-400">{store.populationBreakdown.value.animals}%</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500">Humans</p>
              <p class="text-base font-semibold">{store.humans.total}</p>
              <p class="text-xs text-gray-400">{store.populationBreakdown.value.humans}%</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500">Trees</p>
              <p class="text-base font-semibold">{store.trees.total}</p>
              <p class="text-xs text-gray-400">{store.populationBreakdown.value.trees}%</p>
            </div>
          </div>
        </div>

        {store.animals.total.value > 0 && (
          <div class="p-2 bg-white rounded border">
            <h3 class="text-xs font-medium text-gray-700 mb-1">Animal Distribution</h3>
            <div class="flex gap-2 flex-wrap">
              {Object.entries(store.animalPercentages.value).map(([type, percent]) => (
                <div key={type} class="text-center">
                  <span class="text-base">{store.animals.getEmoji(type as AnimalType)}</span>
                  <p class="text-xs text-gray-400">{percent}%</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
