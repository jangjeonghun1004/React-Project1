
interface Props {
    userName: string,
    userID: string
}

function ComponentE({ userName, userID }: Props) {
    return (
        <span>
            <p>userName: {userName}</p>
            <p>userID: {userID}</p>
        </span>
    );
}

export default ComponentE