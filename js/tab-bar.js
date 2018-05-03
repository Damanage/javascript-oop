export default class TabBar {
    /**
     * Создает объект.
     * @param {{ element: HTMLElement, tabs: Tab[], onChange: Function }} args
     */
    constructor({element, tabs, onChange = () => {}}){
        this._element = element;
        this._tabs = tabs;
        this._onChange = onChange;
        this.init()
        
    }

    /**
     * Инициализирует объект.
     * Устанавливает обработчик для обработки активации вкладки.
     * @private
     */
    init() {
        this._activeTab = this;
        this._tabs.forEach((e)=>{
           if(e.isActive){
               this._activeTab = e;
           }
        })
        
    }

    /**
     * Возвращает HTML элемент.
     * @returns {HTMLElement}
     */
    get element() { 
        return this._element;
    }

    /**
     * Возвращает массив вкладок.
     * @returns {Tab[]}
     */
    get tabs() {
        return this._tabs
    }

    /**
     * Возвращает активную вкладку.
     * @returns {Tab}
     */
    get activeTab() { return this._activeTab}

    /**
     * Возвращает индекс активной вкладки.
     * @returns {number}
     */
    get activeTabIndex() {
        return this._activeTab.id.match(/\d/g)- 1
    }

    /**
     * Вызывается при активации вкладки.
     * Делает все вкладки кроме активной неактивными.
     * Вызывает функцию обратно вызова, отправляя туда активную вкладку.
     * @private
     * @param {Tab} activeTab 
     */
    handleActivate(activeTab) {
        this._activeTab = activeTab;
        this._onChange(activeTab);
        this._tabs.forEach((elem)=>{
            elem.id === activeTab.id ? elem.isActive = true : elem.isActive = false
        });
    }
}