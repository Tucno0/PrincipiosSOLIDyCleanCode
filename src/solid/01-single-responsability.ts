(() => {
    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        // private httpAdapter: Object;

        getProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{id, name: "OLED Tv"});
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos
            console.log("Guardando en base de datos", product);
        }
    }

    class Mailer {

        private masterEmail: string = 'fernando@google.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            // Envia un correo electronico
            console.log("Enviando correo electronico", { emailList, message: template });
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['eduardo@google.com'], 'to-clients');
        }
    }

    class CartBloc {
        public itemsInCart: Object[] = [];

        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log("Agregando al carrito ", productId);
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc( productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: "OLED TV" });
    productBloc.notifyClients();
    cartBloc.addToCart(10);
})();
