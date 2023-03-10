import { useState } from 'react'
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

//styles
import styles from './ImageGallery.module.scss'

function ProductImage({ id, onExpand }) {
    return (
      <motion.img
        src={`https://picsum.photos/id/${id}/200/200`}
        alt=""
        onClick={() => onExpand(id)}
            className={styles.related_image}
        layoutId={`product-${id}`}
      />
    );
  }

const ImageGallery = () => {

    const [productIds, setProductIds] = useState([0, 1, 2]);
    const [primaryProduct, setPrimaryProduct] = useState(4);
  
    function setAsPrimary(id) {
      const currentProductId = primaryProduct;
      const newProductIds = [
        ...productIds.filter((x) => x !== id),
        currentProductId
      ];
  
      setPrimaryProduct(id);
      setProductIds(newProductIds);
    }
  
    return (
      <div className={styles.container}>
        <LayoutGroup type="crossfade">
          <main className={styles.primary_container}>
            <AnimatePresence>
              <motion.img
                key={primaryProduct}
                className={styles.primary_image}
                src={`https://picsum.photos/id/${primaryProduct}/1280/620`}
                alt=""
                layoutId={`product-${primaryProduct}`}
              />
            </AnimatePresence>
          </main>
                <aside className={styles.image_gallery}>
            <AnimatePresence>
              {productIds.map((id) => (
                <ProductImage id={id} key={id} onExpand={setAsPrimary} />
              ))}
            </AnimatePresence>
          </aside>
        </LayoutGroup>
      </div>
    );
}

export default ImageGallery