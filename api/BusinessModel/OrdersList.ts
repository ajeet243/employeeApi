export class OrderList{
    public ShopName:string;
    public ShopId:number;
    public invoiceid:number;
    public UserId:string;
    public note:string;
    public discount:number;
    public totalPrice:number;
    public  _prodList:prodList[]=[];        
    public OrderList(){
        this.ShopName="";
        this.ShopId=0;
        this.invoiceid=0;

    }
}

export class prodList{
 public prodid:number;
 public qty:number;
 public prodname:string;
 public prodsize:string;
 public prodprice:string;
 public cartid:number;
 public orderid:number;
 public prodList()
 {

    
     this.prodid=0;
     this.qty=0;
     this.orderid=0;
 }
}