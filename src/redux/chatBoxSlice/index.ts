import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from 'redux/store'


interface userChatType {
    name: string
    texts: string[]
}
interface activeChatType {
    name: string
    texts: string[]
    index: number
}

// Define a type for the slice state
interface chatBoxState {
    // value: number,
    userChats: userChatType[],
    activeChat: activeChatType | null
    starred: string[]
}

// Define the initial state using that type
const initialState = {
    userChats: [],
    activeChat: null,
    starred: []
} as chatBoxState

export const chatBoxSlice = createSlice({
    name: 'userChats',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        addUser: (state, action: PayloadAction<string>) => {
            state.userChats = [{ name: action.payload, texts: [] }, ...state.userChats]
        },
        setActiveChat: (state, action: PayloadAction<number>) => {
            state.activeChat = { ...state.userChats[action.payload], index: action.payload }
        },
        sendText: (state, action: PayloadAction<string>) => {
            if (state?.activeChat) {
                state.activeChat = { ...state.activeChat, texts: [...state.activeChat.texts, action.payload] }
                state.userChats = state.userChats.map((userChat, i) => i === state.activeChat?.index ? state.activeChat : userChat)
            }
            else
                state.activeChat = null
        },
        deleteText: (state, action: PayloadAction<number>) => {
            if (state?.activeChat) {
                state.activeChat.texts = state.activeChat.texts.filter((text, i) => i !== action.payload)
                state.userChats = state.userChats.map((userChat, i) => i === state.activeChat?.index ? state.activeChat : userChat)
            }
            else
                state.activeChat = null
        },
        addStarredText: (state, action: PayloadAction<string>) => {
            if (!state.starred.includes(action.payload))
                state.starred = [action.payload, ...state.starred]
        },
        removeStarredText: (state, action: PayloadAction<string>) => {
            if (state.starred.includes(action.payload))
                state.starred = state.starred.filter(item => item !== action.payload)
        },

        // KEPT THE CODE FOR MY REFERENCE
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const { addUser, setActiveChat, sendText, addStarredText, removeStarredText, deleteText } = chatBoxSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default chatBoxSlice.reducer