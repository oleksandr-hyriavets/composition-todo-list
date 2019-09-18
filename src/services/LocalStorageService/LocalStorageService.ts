interface LocalStorage {
  getItem: (key: string) => any
  setItem: (key: string, value: any) => void
}

class LocalStorageService {
  localStorage: LocalStorage

  constructor(localStorage: LocalStorage) {
    this.localStorage = localStorage
  }

  async get(key: string): Promise<any> {
    const item = this.localStorage.getItem(key)

    try {
      return JSON.parse(item)
    } catch (err) {
      console.error(err)
    }
  }

  async set(key: string, value: any): Promise<void> {
    const serializedValue = JSON.stringify(value)

    this.localStorage.setItem(key, serializedValue)
  }
}

export default LocalStorageService
