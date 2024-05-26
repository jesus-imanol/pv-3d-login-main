let participants = [];
const saveRegister = (user ,password,email) => {
    participants.push({img:'user.png',user,password,email});
    return true;
};
const getParticipants = () => {
    if(participants.length === 0)
        Swal.fire({
            icon: "info",
            title: "Attention",
            text: "There is no data!",
          });
    else
    return participants;
}



export {saveRegister, getParticipants};

