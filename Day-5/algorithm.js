// 1️ getUserInitials
function getUserInitials(user) {
  return user.firstName[0] + user.lastName[0];
}

// 2️ countProperties
function countProperties(obj) {
  return Object.keys(obj).length;
}

// 3️ invertObject
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

// 4️ removeFalsyValues
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// 5️ groupByAge
function groupByAge(people) {
  return people.reduce((acc, person) => {
    if (!acc[person.age]) acc[person.age] = [];
    acc[person.age].push(person);
    return acc;
  }, {});
}

// 6️ findMostFrequentElement
function findMostFrequentElement(arr) {
  const map = {};
  let max = 0;
  let result;

  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
    if (map[item] > max) {
      max = map[item];
      result = item;
    }
  }

  return result;
}

// 7️ flatten (any depth)
function flatten(arr) {
  return arr.flat(Infinity);
}

// 8️ mergeObjects (deep merge)
function mergeObjects(...objects) {
  return objects.reduce((acc, obj) => {
    for (let key in obj) {
      if (
        obj[key] &&
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key])
      ) {
        acc[key] = mergeObjects(acc[key] || {}, obj[key]);
      } else {
        acc[key] = obj[key];
      }
    }
    return acc;
  }, {});
}

// 9️ rotateArray
function rotateArray(arr, k) {
  k %= arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// 10 intersection
function intersection(nums1, nums2) {
  return [...new Set(nums1.filter(n => nums2.includes(n)))];
}

// 1️1️ groupAnagrams
function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }

  return Object.values(map);
}

// 1️2 moveZerosToEnd (in-place)
function moveZerosToEnd(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i];
    }
  }

  while (index < arr.length) {
    arr[index++] = 0;
  }

  return arr;
}

// 1️3 longestConsecutiveSequence
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1;

      while (set.has(current + 1)) {
        current++;
        streak++;
      }

      max = Math.max(max, streak);
    }
  }

  return max;
}

// 1️4 productExceptSelf
function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

// 1️5 deepEqual
function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// 1️6 serialize & deserialize
function serializeObject(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (value instanceof Date)
      return { __type: "Date", value: value.toISOString() };
    if (value instanceof Map)
      return { __type: "Map", value: [...value] };
    if (value instanceof Set)
      return { __type: "Set", value: [...value] };
    if (value === undefined)
      return { __type: "Undefined" };
    return value;
  });
}

function deserializeObject(str) {
  return JSON.parse(str, (key, value) => {
    if (value && value.__type === "Date")
      return new Date(value.value);
    if (value && value.__type === "Map")
      return new Map(value.value);
    if (value && value.__type === "Set")
      return new Set(value.value);
    if (value && value.__type === "Undefined")
      return undefined;
    return value;
  });
}
