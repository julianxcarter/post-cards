function UserCardComponent({userObj}) {
    return(
        <div style={{borderWidth: '1px'}} className="border-black bg-white flex-none m-2 px-2">
            <div style={{borderBottom: '1px'}} className="italic">
                {userObj.name}
            </div>
            <div>

            </div>
        </div>
    )
}

export default UserCardComponent;