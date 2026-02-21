// Beginner 1
function getUserInitials(user) {
  return user.firstName[0] + user.lastName[0];
}

// Beginner 2
function countProperties(obj) {
  return Object.keys(obj).length;
}

// Beginner 3
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    result[obj[key]] = key;
  }
  return result;
}

// Beginner 4
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// Easy 5
function groupByAge(people) {
  return people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person);
    return acc;
  }, {});
}

// Easy 6
function findMostFrequentElement(arr) {
  const map = {};
  let max = 0, result;
  for (let n of arr) {
    map[n] = (map[n] || 0) + 1;
    if (map[n] > max) {
      max = map[n];
      result = n;
    }
  }
  return result;
}

// Easy 7
function flatten(arr) {
  return arr.flat(Infinity);
}

// Medium 8 Deep Merge
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

// Medium 9 Rotate
function rotateArray(arr, k) {
  k %= arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// Medium 10 Intersection
function intersection(a, b) {
  return [...new Set(a.filter(x => b.includes(x)))];
}

// Medium 11 Group Anagrams
function groupAnagrams(words) {
  const map = {};
  for (let w of words) {
    const key = w.split("").sort().join("");
    map[key] = map[key] || [];
    map[key].push(w);
  }
  return Object.values(map);
}

// Medium-Hard 12
function moveZerosToEnd(arr) {
  let insertPos = 0;
  for (let n of arr)
    if (n !== 0) arr[insertPos++] = n;
  while (insertPos < arr.length)
    arr[insertPos++] = 0;
  return arr;
}

// Hard 13
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let max = 0;

  for (let n of set) {
    if (!set.has(n - 1)) {
      let current = n;
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

// Hard 14
function productExceptSelf(nums) {
  const result = Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

// Hard 15 Deep Equal
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || !a || !b)
    return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// Hard 16 Custom Serializer
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

