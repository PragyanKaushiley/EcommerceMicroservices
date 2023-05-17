using Catalog.API.Entities;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Catalog.API.Repositories
{
    public interface IProductRepository
    {
        #region ReadOperations
        Task<IEnumerable<Product>> GetProducts();

        Task<Product> GetProduct(string id);

        Task<IEnumerable<Product>> GetProductByName(string name);

        Task<IEnumerable<Product>> GetProductByCategory(string categoryName);
        #endregion ReadOperations

        Task CreateProduct(Product product);

        Task<bool> UpdateProduct(Product product);

        Task<bool> DeleteProduct(string id);
    }
}
