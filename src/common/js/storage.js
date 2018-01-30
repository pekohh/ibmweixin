import storage from 'good-storage'

const MSG = '__msg__'

// 保存结果
export function saveMsg (msg) {
  console.log(msg)
  storage.set(MSG, JSON.stringify(msg))
}

// 读取结果

export function loadMsg () {
  return JSON.parse(storage.get(MSG, []))
}
