import React, { useEffect, useRef, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {
    fetchUserForChat,
    fetchAllChat,
    fetchAllChatByUser,
    fetchRemaingUser,
    fetchCourseGruop,
    fetchGruopById,
    fetchGruopChatByUser
} from "../../../../../store/action/user/GetData"
import { joinRoomCreate } from "../../../../../store/action/user/AddData"
import { connect } from 'react-redux';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Cookies from 'js-cookie';
import { io } from 'socket.io-client';
import { Baseurl } from '../../../../../baseurl';
const socket = io.connect(Baseurl);

const Userlist = ({ dispatch, userById, chat, userlistchat, remaining, group, groupid, gruop_chat }) => {


    const [userChat, setUserChat] = useState("");
    const [messages, setMessages] = useState("");
    const [allChat, setAllChat] = useState("");
    const [messagesGroup, setMessagesGroup] = useState("");
    const [chatCount, setChatCount] = useState("");
    const [remainingData, setRemainingData] = useState("");
    const userId = Cookies.get("userId");
    const [panal, setPanal] = useState(false);
    const [groupData, setGruop] = useState("");
    const [groupIdData, setGroupIdData] = useState("");
    const [groupchat, setGroupChat] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        dispatch(fetchAllChatByUser());
        dispatch(fetchRemaingUser());
        dispatch(fetchCourseGruop());
    }, []);

    useEffect(() => {
        const data = userlistchat.data && userlistchat.data.data && userlistchat.data.data.data;
        setChatCount(data);

    }, [userlistchat]);

    useEffect(() => {
        const data = remaining.data && remaining.data.data && remaining.data.data.data
        data && setRemainingData(data)
    }, [remaining])

    //------------FOR CHAT--------------------

    const userbyid = (id) => {
        dispatch(fetchUserForChat(id));
        dispatch(joinRoomCreate({ "sender_id": userId, "receiver_id": id }));
        socket.emit("joinRoom", { "user_id": userId })
        dispatch(fetchAllChat());
        const reciver_id = Cookies.get("reciver_id")
        const chatRoom = Cookies.get("chatRoom");
        socket.emit("readUnread", { "chat_room_id": chatRoom, "receiver_id": reciver_id });
        socket.on("readChat", data => console.log(data))
        dispatch(fetchAllChat());
    }

    const chatWithUser = (e, id) => {
        e.preventDefault();
        if (messages) {
            socket.emit("chat", {
                "sender_id": userId,
                "receiver_id": id,
                "message": messages
            });
            setMessages("")

        }
        dispatch(fetchAllChat());
    }

    useEffect(() => {
        const data = userById.data && userById.data.data && userById.data.data.data;
        data && setUserChat(data)
    }, [userById]);

    useEffect(() => {
        socket.on("chatReceive", (data) => {
            setAllChat(data.chat);
        })
    }, [chat]);

    useEffect(() => {
        const data = chat.data && chat.data.data
        data && data.code == 200 && setAllChat(data.data.chat);
        data && data.code == 404 && setAllChat("")
    }, [chat]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ block: "end", inline: "nearest" });
    }

    useEffect(() => {
        scrollToBottom()
    }, [allChat]);

    // gruop data------------

    const GruopbyidView = (id) => {
        dispatch(fetchGruopById(id));
        dispatch(fetchGruopChatByUser())
    }

    const chatWithGruops = (e, id) => {
        e.preventDefault();
        if (messagesGroup) {
            socket.emit("groupChat", {
                "group_id": id,
                "sender_id": userId,
                "message": messagesGroup
            });
            setMessagesGroup("")
        }
        dispatch(fetchGruopChatByUser())
    }


    useEffect(() => {
        const data = group.data && group.data.data && group.data.data.data
        data && setGruop(data)
    }, [group]);

    useEffect(() => {
        console.log("hellooooo")
        socket.on("groupChatMessage", (data) => {
            console.log("hellooooo", data)
        })
    }, [gruop_chat]);

    useEffect(() => {
        const data = gruop_chat.data && gruop_chat.data.data
        data && data.code == 200 && setGroupChat(data.data.chat);
        data && data.code == 404 && setGroupChat("")
    }, [gruop_chat])


    useEffect(() => {
        scrollToBottom()
    }, [groupchat])

    useEffect(() => {
        const data = groupid.data && groupid.data.data && groupid.data.data.data
        data && setGroupIdData(data)
    }, [groupid]);

    return (
        <>
            <div className='row flex'>
                <div className='border-r-2 md:w-[35%] sm:[90%] w-[100%] h-[70vh]'>
                    <div className='bg-[#212A41] text-[white] flex gap-4 pt-7 pl-4'>
                        <div onClick={() => setPanal(true)} className={` ${panal === true ? "border-b-2 border-[white]" : " "} cursor-pointer`}>Groups</div>
                        <div onClick={() => setPanal(false)} className={` ${panal === false ? "border-b-2 border-[white]" : " "} cursor-pointer`}>Chats</div>
                    </div>
                    {
                        panal ? <div className='h-[60vh] py-2 overflow-auto pl-2'>
                            {
                                groupData && groupData.map((val, key) => {
                                    return (
                                        <>
                                            <div className='flex justify-between gap-3 py-3 cursor-pointer' id={key} onClick={() => { GruopbyidView(val._id), Cookies.set("group_id", val._id) }}>
                                                <div className='flex'>
                                                    <img src={val.group_img} alt="user profile" className='w-[42px] h-[42px] rounded-full border-2 border-[#212A41]' />
                                                    <div>
                                                        <h3 className='text-[20px] ml-2 capitalize'>{val.group_name}</h3>
                                                        <p className='text-sm text-slate-500 font-normal text-start px-2'>{val.group_desc}</p>
                                                    </div>
                                                </div>
                                            </div><hr className=''></hr>
                                        </>
                                    )
                                })
                            }
                        </div> :
                            <div className='h-[60vh] py-2 overflow-auto pl-2'>
                                {
                                    chatCount && chatCount.map((val, key) => {
                                        return (
                                            <>
                                                <div className='flex justify-between gap-3 py-3 cursor-pointer' id={key} onClick={() => { userbyid(val.user_id), Cookies.set("reciver_id", val.user_id) }}>
                                                    <div className='flex'>
                                                        <img src={val.profile} alt="user profile" className='w-[42px] h-[42px] rounded-full border-2 border-[#212A41]' />
                                                        <div>
                                                            <h3 className='text-[20px] ml-2 capitalize'>{val.username}</h3>
                                                            <p className='text-sm text-slate-500 font-normal text-start px-2'>{val.lastMessage}</p>
                                                        </div>
                                                    </div>
                                                    <div className='self-center mr-4'>
                                                        {val.unreadMsgCount == 0 ? "" : <p className='bg-[#212A41] px-2 text-xs py-1 rounded-[50%] text-white'>{val.unreadMsgCount}</p>}

                                                    </div>
                                                </div><hr className=''></hr>
                                            </>
                                        )
                                    })
                                }
                                {
                                    remainingData && remainingData.map((val, key) => {
                                        return (
                                            <>
                                                <div className='flex justify-between gap-3 py-3 cursor-pointer' id={key} onClick={() => { userbyid(val._id), Cookies.set("reciver_id", val._id) }}>
                                                    <div className='flex'>
                                                        <img src={val.profile} alt="user profile" className='w-[42px] h-[42px] rounded-full border-2 border-[#212A41]' />
                                                        <div>
                                                            <h3 className='text-[20px] ml-2 capitalize py-1'>{val.first_name}</h3>
                                                        </div>
                                                    </div>

                                                </div><hr className=''></hr>
                                            </>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
                <div className='w-[100%] flex flex-col justify-between'>
                    {
                        panal ? <div>
                            {
                                groupIdData ? <>
                                    <div className='flex gap-3 py-2 bg-[#212A41]' >
                                        <img src={groupIdData.group_img} alt="user profile" className='w-[40px] h-[40px] ml-4 rounded-full border-2 border-[#212A41]' />
                                        <div><h3 className='text-[20px] capitalize py-1 text-[white]'>{groupIdData.group_name}</h3></div>
                                    </div>
                                    <div className='h-[60vh] py-2 flex flex-col overflow-auto  scrollbar scrollbar-thumb-gray-000 scrollbar-track-gray-000'>
                                        {
                                            groupchat && groupchat.map((res, key) => {
                                                return (
                                                    <>
                                                        {
                                                            res.sender == userId ? (<div className='flex justify-end m-2 mx-1' key={key}>
                                                                <div className='flex  bg-[#212A41] text-[white] rounded-lg px-3 py-1 '>
                                                                    <p className='text-start '>{res.message}</p>
                                                                </div>

                                                            </div>) : (<div className='receiver'>

                                                                <div className='flex justify-start m-2 mx-2'>

                                                                    <div className='flex flex-col bg-slate-100 text-[#212A41] px-4 py-2 shadow-lg rounded-lg '><p className='text-[12px] text-gray-400'>{res.senderName}</p> <p>{res.message}</p></div>
                                                                </div>
                                                            </div>)
                                                        }

                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                    <div style={{ marginBottom: 20 }} ref={messagesEndRef} />
                                    <div className='mb-1 mx-2'>
                                        <form className='flex gap-2' onSubmit={(e) => chatWithGruops(e, groupIdData._id)}>
                                            <input type="text" name="messagesGroup" placeholder='Enter The Message...' value={messagesGroup} onChange={(e) => setMessagesGroup(e.target.value)} className='ml-2  w-[95%] rounded-lg'></input>
                                            <button className='bg-[#3DC0DF] px-6 py-1 rounded-lg text-[#212A41]' type="submit" >Send</button>
                                        </form>
                                    </div>
                                </> :
                                    <div className='md:visible invisible'>
                                        <h1 className='text-[36px] text-center mt-60'>Chat With Your Groups</h1>
                                    </div>
                            }
                        </div> :
                            <div>
                                {
                                    userChat ? <>
                                        <div className='flex gap-3 py-2 bg-[#212A41]' >
                                            <img src={userChat.profile} alt="user profile" className='w-[40px] h-[40px] ml-4 rounded-full border-2 border-[#212A41]' />
                                            <div><h3 className='text-[20px] capitalize py-1 text-[white]'>{userChat.first_name}</h3></div>
                                        </div>
                                        <div className='h-[60vh] py-2 flex flex-col overflow-auto  scrollbar scrollbar-thumb-gray-000 scrollbar-track-gray-000'>
                                            {
                                                allChat && allChat.map((res, key) => {
                                                    return (
                                                        <>
                                                            {
                                                                res.sender == userId ? (<div className='flex justify-end m-2 mx-1' key={key}>
                                                                    <div className='flex  bg-[#212A41] text-[white] rounded-lg px-3 py-1 '>
                                                                        <p className=' '>{res.message}</p>
                                                                        {
                                                                            res.read == 0 ? <DoneIcon className='text-[12px] item-end ml-2 mt-2' /> :
                                                                                <DoneAllIcon className='text-[12px] item-end ml-2 mt-2' />
                                                                        }
                                                                    </div>
                                                                </div>) : (<div className='receiver'>
                                                                    <div className='flex justify-start m-2 mx-2'>
                                                                        <p className='bg-slate-100 text-[#212A41] px-4 py-2 shadow-lg rounded-lg'>{res.message}</p>
                                                                    </div>
                                                                </div>)
                                                            }

                                                        </>
                                                    )
                                                })
                                            }
                                            <div style={{ marginBottom: 20 }} ref={messagesEndRef} />
                                        </div>
                                        <div className='mb-1 mx-2'>
                                            <form className='flex gap-2' onSubmit={(e) => chatWithUser(e, userChat._id)}>
                                                <input type="text" name="messages" placeholder='Enter The Message...' value={messages} onChange={(e) => setMessages(e.target.value)} className='ml-2  w-[95%] rounded-lg'></input>
                                                <button className='bg-[#3DC0DF] px-6 py-1 rounded-lg text-[#212A41]' type="submit" >Send</button>
                                            </form>
                                        </div>
                                    </> :
                                        <div className='md:visible invisible'>
                                            <h1 className='text-[36px] text-center mt-60'>Chat With Your Friends</h1>
                                        </div>
                                }
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    user: state.fetchUserList,
    userById: state.fetchUserForChat,
    join: state.joinRoomCreate,
    chat: state.fetchAllChat,
    userlistchat: state.fetchAllChatByUser,
    remaining: state.fetchRemaingUser,
    group: state.fetchCourseGruop,
    groupid: state.fetchGruopById,
    gruop_chat: state.fetchGruopChatByUser


})
export default connect(mapStateToProps)(Userlist)

