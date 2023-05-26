import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('4faf98f4-b068-435c-bc86-e37b768fb16e', props.user.username, props.user.secret)
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage