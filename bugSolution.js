**Solution 1: Creating a Copy**
```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState({ nested: { value: 'initial' } });

  const updateNestedValue = () => {
    // Correct approach: create a copy before updating
    const newData = { ...data, nested: { ...data.nested, value: 'updated' } };
    setData(newData);
  };

  return (
    <View>
      <Text>{data.nested.value}</Text>
      <Button title="Update" onPress={updateNestedValue} />
    </View>
  );
};
```
**Solution 2: Using Immer**
```javascript
import React, { useState } from 'react';
import produce from 'immer';

const MyComponent = () => {
  const [data, setData] = useState({ nested: { value: 'initial' } });

  const updateNestedValue = () => {
    setData(draft => produce(draft, state => {
      state.nested.value = 'updated'
    }));
  };

  return (
    <View>
      <Text>{data.nested.value}</Text>
      <Button title="Update" onPress={updateNestedValue} />
    </View>
  );
};
```