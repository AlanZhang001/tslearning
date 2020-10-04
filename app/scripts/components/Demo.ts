interface SquareConfig {
    Enum?: string;
    width?: number;
    [propName: string]: any;
    alert(): void;
}
class Demo implements SquareConfig{
    alert(){
        console.log('hello');
    }
}
module.exports = Demo;
