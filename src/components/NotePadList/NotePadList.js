import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';

import NotePadListItem from './NotePadListItem/NotaPadListItem'
import {useDispatch, useSelector} from "react-redux";
import {getNotePadListAction} from '../../store/actions/notePadActions'
import Button from "../reusables/Button/Button";
import authCall from "../../api/auth";

const NotePadList = () => {
    const dispatch = useDispatch();
    const [list, listById] = useSelector(state => ([state.notePad.list, state.notePad.listById]))
    let history = useHistory();
    const [authorized, setAuthorized] = useState(!!localStorage.getItem('access_token'))

    useEffect(() => {
        (async () => {
            const params = new URLSearchParams(history.location.search)
            const code = params.get('code');
            if (code) {
                history.replace({
                    search: '',
                })
                const response = await authCall('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', "POST", {
                    client_id: '88a82b9efbcdf9d796b8',
                    client_secret: '115263a129ed15ba484950cd594457d3f5adb696',
                    code: code,
                })
                if(response && typeof response === 'object' && 'access_token' in response){
                    localStorage.setItem('access_token', response.access_token)
                    setAuthorized(true)
                }
            }
        })()
    }, [history])

    useEffect(() => {
        dispatch(getNotePadListAction())
    }, [dispatch, authorized])

    const createNotePad = () => {
        history.push('/create')
    }

    const logIn = async () => {
        window.location.replace('https://github.com/login/oauth/authorize?client_id=88a82b9efbcdf9d796b8&scope=gist')
    }

    const logOut = () => {
        localStorage.removeItem('access_token')
        setAuthorized(false)
    }

    return (
        <div>

            <div className='flex items-center content-between'>
                <h2> NotePad List Component </h2>
                <div>
                    <Button type='add' title='Log In' onClick={logIn}/>
                    <Button type='delete' title='Log Out' onClick={logOut}/>
                </div>
                {authorized && <Button type='add' title='Create Notepad' onClick={createNotePad}/>}
            </div>
            {list.map(id => {
                return <NotePadListItem id={id}
                                        title={listById[id].description}
                                        key={id}
                                        authorized={authorized}
                />
            })}
        </div>
    )
}

export default NotePadList
