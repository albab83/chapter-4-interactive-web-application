const token = ~~[Math.random() * 12345678];

const pictures = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']

function login (username) {
    console.log('processing token user now...')
    return new Promise((succes, failed) => {
        setTimeout(() => {
        if(username != "albab") failed("sorry wrong data")          
            succes({token})
        }, 200)
    })
}

function getUser(token) {
    console.log("processing apiKey now.....")

    return new Promise((succes, failed) => {
        setTimeout(() => {
          if(!token) failed("sorry no token cannot acces")
            succes({apiKey: "xtr2566"})
        }, 500)
    })
}

function getPictures(apiKey) {
    console.log('processing picture now....')

    return new Promise ((succes, failed) => {
        setTimeout(() => {
    if(!apiKey) failed ("no apikey, cannot acces")
            succes({pic : pictures})
        }, 1500)
    })
}


async function userDisplay() {
    try{
        const {token} = await login("albab");
        const {apiKey} = await getUser(token)
        const {pic} = await getPictures(apiKey)
    
        console.log(`
        token anda adalah: ${token} 
        apiKey anda adalah: ${apiKey}
        request gambar anda adalah: ${pic}
        `)
    } catch(err) {
        console.log(err)
    }
}

userDisplay()