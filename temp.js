// Longhand
let num = null
let actualNum

if (num !== null && num !== undefined) {
  actualNum = num
} else {
  actualNum = 0
}

// Shorthand
let num = null
let actualNum = num ?? 0 // 0
