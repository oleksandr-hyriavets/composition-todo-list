interface LocalStorage {
  getItem: (key: string) => any
  setItem: (key: string, value: any) => void
}

class LocalStorageService {
  localStorage: LocalStorage

  constructor(localStorage: LocalStorage) {
    this.localStorage = localStorage
  }

  get(key: string): any {
    const item = this.localStorage.getItem(key)

    try {
      return JSON.parse(item)
    } catch (err) {
      console.error(err)
    }
  }

  set(key: string, value: any): void {
    const serializedValue = JSON.stringify(value)

    this.localStorage.setItem(key, serializedValue)
  }
}

export default LocalStorageService
