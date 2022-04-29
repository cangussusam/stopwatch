export function dom(seletor: string){

    return function(target: any, propertyKey: string){

        let domElement: HTMLElement

        const addGet = function(){
            if(!domElement) domElement = document.querySelector(seletor) as HTMLElement
            return domElement
        }
       
        Object.defineProperty(target, propertyKey, {get: addGet})
    }
} 