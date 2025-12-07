import { AnimalsSection } from './AnimalsSection'
import { HumansSection } from './HumansSection'
import { TreesSection } from './TreesSection'
import { FarmSection } from './FarmSection'
import { ReportingSection } from './ReportingSection'

export function Home() {
  return (
    <div class="p-4 max-w-4xl mx-auto">
      <h1 class="text-xl font-bold mb-3">Farm Simulator</h1>
      <AnimalsSection />
      <HumansSection />
      <TreesSection />
      <FarmSection />
      <ReportingSection />
    </div>
  )
}
