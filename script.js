
 let myLeads = []

 let oldLeads = []

 const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById("ul-el")
 let containerEl = document.getElementById("container")
 const deleteBtn = document.getElementById("delete-btn")
 const tabBTn = document.getElementById("tab-btn")

 
 let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

 console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)

}

function render(leads){

    let listItems = ""
    for(i=0; i < leads.length; i++){
        listItems += `<li><a target= '_blank' href= '${leads[i]}'> ${leads[i]}</a></li>`
     }
    
     ulEl.innerHTML = listItems
    
    }

 inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
   

})

tabBTn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }) 
    
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)   
 })

