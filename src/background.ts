import { urlEvaluators } from "./urlEvaluators";

let active = false;

function makeOrange(color: string): void {
    document.body.style.backgroundColor = color;
}


chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
    if(urlEvaluators.isGmail(tab.url || "")){
        chrome.scripting.executeScript({
            target: {tabId},
            func: makeOrange,
            args: ["red"]
        }).then();
    }
})