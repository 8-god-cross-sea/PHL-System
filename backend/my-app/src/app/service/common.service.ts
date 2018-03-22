export class CommonService {
    static getUrl(route:string):string{
        return 'http://frozen-retreat-73403.herokuapp.com/api/'+route;
    }
}
