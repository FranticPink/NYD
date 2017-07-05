import { Component } from '@angular/core';

@Component({
  selector: 'page-extension',
  templateUrl: 'extension.html'
})
export class ExtensionPage{
      items: Array<{name:string,num:string,size:string}>;
        constructor(){
            this.items=[{
                'name':'藏汉互译词典',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'柯林英汉双解大辞典',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'汉英/英汉离线翻译包',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'豪华版英汉词库',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'豪华版汉英词库',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'英英释义',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'新英汉大辞典',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'现代汉语大辞典',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'21世纪大英汉词典',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'离线美式语音',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'离线英式语音',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'同近义词',
                'num':'113845',
                'size':'15713K'
            },{
                'name':'词组短语',
                'num':'113845',
                'size':'15713K'
            }]
            
        }   

}