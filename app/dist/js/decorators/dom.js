export function dom(seletor) {
    return function (target, propertyKey) {
        let domElement;
        const addGet = function () {
            if (!domElement)
                domElement = document.querySelector(seletor);
            return domElement;
        };
        Object.defineProperty(target, propertyKey, { get: addGet });
    };
}
