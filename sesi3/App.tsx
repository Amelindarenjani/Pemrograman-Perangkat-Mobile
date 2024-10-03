import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';

const App = () => {
  const [title, setTitle] = useState<string>('');
  const [todo, setTodo] = useState<any[]>([
    {
      id: 1,
      title: 'Learn React Native',
      completed: false,
      isEditing: false,
    },
  ]);
  const inputRefs = useRef<any>({});
  const [cursorPosition, setCursorPosition] = useState<{
    [key: number]: {start: number; end: number};
  }>({});

  const handleAddTodo = () => {
    if (!title) {
      Alert.alert('Error', 'Tambah To Do List');
      return;
    }
    const newTodo = {
      id: todo.length + 1,
      title: title,
      completed: false,
      isEditing: false,
    };
    setTodo([...todo, newTodo]);
    setTitle('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodo(todo.filter(item => item.id !== id));
  };

  const handleDeleteAll = () => {
    setTodo([]);
  };

  const toggleEditTodo = (id: number) => {
    setTodo(
      todo.map(item =>
        item.id === id ? {...item, isEditing: !item.isEditing} : item,
      ),
    );
    if (!todo.find(item => item.id === id).isEditing) {
      setTimeout(() => {
        if (inputRefs.current[id]) {
          const textLength =
            todo.find(item => item.id === id)?.title.length || 0;
          setCursorPosition({
            ...cursorPosition,
            [id]: {start: textLength, end: textLength},
          });
          inputRefs.current[id].focus(); // Fokus pada TextInput ketika edit mode diaktifkan
        }
      }, 100); // Memberi sedikit jeda untuk memastikan state sudah diperbarui
    }
  };

  const handleEditTodo = (id: number, newTitle: string) => {
    setTodo(
      todo.map(item => (item.id === id ? {...item, title: newTitle} : item)),
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 0,
      }}>
      <View
        style={{
          height: 40,
          borderBottomWidth: 1,
          borderRadius: 2,
          borderBottomColor: '#B7B7B7',
          alignItems: 'flex-start',
          marginBottom: 10,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginEnd: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#8EACCD',
              fontSize: 18,
              marginVertical: 'auto',
              fontWeight: 'bold',
            }}>
            NotesApp
          </Text>
          <Image
            source={require('./assets/favicon-rbg.png')}
            style={{width: 25, height: 25}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          gap: 10,
        }}>
        <TextInput
          placeholder="Tambah To Do List"
          style={{
            flex: 1,
            borderColor: '#B7B7B7',
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
            height: 45,
          }}
          value={title}
          onChangeText={setTitle}
        />
        <Pressable
          style={{
            backgroundColor: '#708871',
            padding: 10,
            borderRadius: 5,
            height: 40,
          }}
          onPress={handleAddTodo}>
          <Text
            style={{
              color: 'white',
              paddingVertical: 'auto',
              fontWeight: 'bold',
            }}>
            Tambah
          </Text>
        </Pressable>
      </View>

      {/* Tombol Hapus Semua */}
      <Pressable
        style={{
          backgroundColor: '#C96868',
          padding: 10,
          borderRadius: 15,
          marginBottom: 10,
        }}
        onPress={handleDeleteAll}>
        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
          Hapus Semua
        </Text>
      </Pressable>

      {/* Daftar To-Do */}
      <FlatList
        data={todo}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
              padding: 5,
              borderColor: '#B7B7B7',
              borderWidth: 1,
              borderRadius: 15,
            }}>
            {/* Input untuk Edit To-Do */}
            <TextInput
              ref={ref => (inputRefs.current[item.id] = ref)} // Menyimpan referensi TextInput
              style={{
                fontSize: 15,
                color: 'black',
                flex: 1,
                marginRight: 10,
              }}
              value={item.title}
              editable={item.isEditing} // Hanya bisa di-edit jika isEditing true
              onChangeText={newTitle => handleEditTodo(item.id, newTitle)}
              selection={cursorPosition[item.id]} // Menetapkan posisi kursor ke akhir teks
            />

            {/* Tombol Edit */}
            <Pressable
              style={{
                backgroundColor: '#E8B86D',
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
              onPress={() => toggleEditTodo(item.id)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Edit</Text>
            </Pressable>

            {/* Tombol Hapus Satu To-Do */}
            <Pressable
              style={{
                backgroundColor: '#C96868',
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => handleDeleteTodo(item.id)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Hapus</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default App;
