import React from 'react'

export default function Chat() {
    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}






















// import React from 'react'

// const messages = () => {
//     const handleSendMessage = (e) => {
//         e.preventDefault();
//         messageInput.value ='';

//     }
//     let sendButtonIcon = <i className={"material-icons"}>send</i>;
    
    
//     return (
//         <div>
//             <form onSubmit={handleSendMessage}>
// 				<input
// 					type="hidden"
// 					ref={owner => (ownerInput = owner)}
// 					value={this.props.owner}
// 				/>
// 				<input
// 					type="hidden"
// 					ref={ownerAvatar => (this.ownerAvatarInput = ownerAvatar)}
// 					value={this.props.ownerAvatar}
// 				/>
// 				<input
// 					type="text"
// 					ref={message => (messageInput = message)}
// 					className={"chatApp__convInput"}
// 					placeholder="Text message"
					
// 					tabIndex="0"
// 				/>
// 				<div className={'chatApp__convButton ' + loadingClass} onClick={this.handleSendMessage}>
// 				{sendButtonIcon}
// 				</div>
// 			</form>
//         </div>
//     )
// }

// export default messages
