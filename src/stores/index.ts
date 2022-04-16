import AuthStore from './authStore'
import CloudServiceStore from './cloudServiceStore'
import DOAuthStore from './doAuthStore'
import BandwidthStore from './monitoring/bandwidthStore'
import MemoryStore from './monitoring/memoryStore'
import TestStore from './testStore'

export class RootStore {
  testStore: TestStore
  authStore: AuthStore
  doAuthStore: DOAuthStore
  cloudServiceStore: CloudServiceStore
  bandwidthStore: BandwidthStore
  memoryStore: MemoryStore

  constructor() {
    this.testStore = new TestStore(this)
    this.authStore = new AuthStore(this)
    this.doAuthStore = new DOAuthStore(this)
    this.cloudServiceStore = new CloudServiceStore(this)
    this.bandwidthStore = new BandwidthStore(this)
    this.memoryStore = new MemoryStore(this)
  }
}

export const rootStore = new RootStore()
