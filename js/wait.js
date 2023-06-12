//  Fetching Member Ship Card data Start
let NEW_card;
let Nor_member_card = [];
let Normal_members_container = document.querySelector('.Normal_members_container'),
    Normal_member_card_container = Normal_members_container.querySelector('.Normal_member_card_container'),
    normal_memeber_search = Normal_members_container.querySelector('.normal_memeber_search')

const FETCH_memberShipData = async () => {
    // https://dl.dropboxusercontent.com/s/cht9ynad9z0c958/testing.json?dl=0
    // https://dl.dropbox.com/s/ymdq3rx7mvcm6rk/CMJ_Chakiwara_members.json?dl=0
    await fetch("https://dl.dropboxusercontent.com/s/ymdq3rx7mvcm6rk/CMJ_Chakiwara_members.json?dl=0")
        .then(res => res.json())
        .then(data => MembersDataWork(data))

}
FETCH_memberShipData()

// const Search_Normal_member = (e) => {
//     if (e.target.value.length <= 1 && e.key == " ") return

//     for (let i = 0; i < Nor_member_card.length; i++) {
//         let cardS_nameS = Nor_member_card[i].querySelector('.person_name').innerText.toUpperCase()
//         let cardS_sirNameS = Nor_member_card[i].querySelector('.person_sir_name').innerText.toUpperCase()
//         let cardS_ContactS = Nor_member_card[i].querySelector('.person_contact').innerText.toUpperCase()
//         let input_val = e.target.value.toUpperCase()

//         if (cardS_nameS.indexOf(input_val) >= 0 || cardS_sirNameS.indexOf(input_val) >= 0 || cardS_ContactS.indexOf(input_val) >= 0) {
//             Nor_member_card[i].classList.remove("opacity0")
//             Nor_member_card[i].classList.add("opacity1")
//             setTimeout(()=>{
//                 Nor_member_card[i].classList.remove("hide")
//                 Nor_member_card[i].classList.remove("opacity1")
//             },1000)
            
//             console.log(Nor_member_card[i].style.display)
//         } else {

//             Nor_member_card[i].classList.add("opacity0")
//             setTimeout(()=>{
//                 Nor_member_card[i].classList.add("hide")
//             },1000)

//         }
//     }

// }

/*  */



const MembersDataWork = (data) => {
    console.log(data)

    data.forEach(person => {
        NEW_card = document.createElement('div')
        NEW_card.className = "col-md-3 d-flex justify-content-center col-sm-6 p-2 min_width_for_card Trasition03"
        NEW_card.innerHTML = `
            <div class="CMSF_card">
            <div class="custom-shape-divider-top-1685963510">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="Person_details">
                <div class="name_box">&nbsp; Name : <span class="person_name"> ${person.Name} </span></div>
                <div class="Sur_name_box">&nbsp; Sir Name : <span class="person_sir_name">${person.sir_name}</span></div>
                <div class="Contect_Number_box">&nbsp; Contact : <span class="person_contact">${person.Phone_No}</span></div>
            </div>
            <div class="Person_title">
                <span class="">ID : ${person.Member_id}</span>
            </div>
            </div>
        `

        Normal_member_card_container.append(NEW_card)
        Nor_member_card.push(NEW_card)

        // console.log(person.Name)
        // console.log(person.F_Name_Husbnad_name)
        // console.log(person.F_Name_Husbnad_name)
        // console.log(person.sir_name)
        // console.log(person.CNIC_NO)
        // console.log(person.Address)
        // console.log(person.Phone_No)


    });
}

normal_memeber_search.addEventListener("change", Search_Normal_member)
normal_memeber_search.addEventListener("keyup", Search_Normal_member)
//  Fetching Member Ship Card data end