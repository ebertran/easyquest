/**
 * Provides a common interface for session and local storage
 * 
 * Usage:
 *		Xtorage.local.setObject('something', { data: 'Hello, World!' })
 *		const something = Xtorage.local.getObject('something')
 *		console.log(something.message)
 */
class Xtorage {
	constructor(storage) {
		this.storage = storage
	}

	get(key) {
		return this.storage.getItem(key)
	}

	set(key, value) {
		this.storage.setItem(key, value)
	}

	remove(key) {
		this.storage.removeItem(key)
	}

	getObject(key) {
		const value = this.get(key)
		return value? JSON.parse(value) : value
	}

	setObject(key, obj) {
		this.set(key, JSON.stringify(obj))
	}

	removeObject(key) {
		this.remove(key)
	}

	static session = new Xtorage(sessionStorage)

	static local = new Xtorage(localStorage)
}

export default Xtorage

