function showModal(productId) {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  
    
    const product = getProductDetails(productId);
  
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-description').innerText = product.description;
    document.getElementById('modal-price').innerText = `Price: $${product.price}`;
  }
  
  function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  function getProductDetails(productId) {
   console.log(productId)
    const products = {
      1: {
        title: 'VV SOLAR TV',
        description: 'Description of VV SOLAR TV',
        price: 780,
        image: 'https://image.made-in-china.com/2f0j00iozcEekdAfbK/Cheap-Price-Portable-TV-8-Inch-800-480-TFT-LCD-LED-TV-Televisions.webp'
      },
      2: {
        title: 'Samsung TV',
        description: 'Description of Samsung TV',
        price: 150,
        image: 'https://images-cdn.ubuy.co.in/636b706f764e72478b482a50-smart-tv-hd-32inch-television-set.jpg'
      },
      3: {
        title: 'LG TV',
        description: 'Description of LG TV',
        price: 250,
        image: 'https://aiwaindia.com/cdn/shop/products/aiwatvAS55UHDX1-GTVd2cshots1_800x.jpg?v=1671258764'
      },
      4: {
        title: 'IQ',
        description: 'Description of IQ',
        price: 750,
        image: 'https://m.media-amazon.com/images/I/61ntKdWfXwL._SX679_.jpg'
      },
      5: {
        title: 'Samsung Galaxy',
        description: 'Description of Samsung Galaxy',
        price: 800,
        image: "https://m.media-amazon.com/images/I/91VoPbGFbPL._AC_SL1500_.jpg"
      },
      6: {
        title: 'Redmi',
        description: 'Description of Redmi',
        price: 300,
        image: 'https://images-cdn.ubuy.co.in/63f27a2f92b7123c5f619872-xiaomi-redmi-note-10-pro-128gb-6gb-ram.jpg'
      },
      7: {
        title: 'Shoe',
        description: 'Description of Shoe',
        price: 50,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      },
      8: {
        title: 'Head phone',
        description: 'Description of Head phone',
        price: 80,
        image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      },
      9: {
        title: 'Handbag',
        description: 'Description of Handbag',
        price: 25,
        image: 'https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      10: {
        title: 'Fossil Watch',
        description: 'Description of Fossil Watch',
        price: 90,
        image: 'https://cdn.helioswatchstore.com/production/media/catalog/product/cache/d33ebde8b2069c657577ccfc338eb502/e/s/es4628_1.jpg'
      },
      11: {
        title: 'Firebolt Watch',
        description: 'Description of Firebolt Watch',
        price: 80,
        image: "https://www.fireboltt.com/cdn/shop/files/grenade-black_1_400x.png?v=1687251707"
      },
      12: {
        title: 'Apple Watch',
        description: 'Description of Apple Watch',
        price: 75,
        image: 'https://d2xamzlzrdbdbn.cloudfront.net/products/70e18ffa-fcb4-4778-9919-eebcb27774df21070641.jpg'
      },
      13: {
        title: 'LG-Refrigerator',
        description: 'Description of LG-Refrigerator',
        price: 9000,
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100531408-847_stainlesssteel_1&recipeName=350'
      },
      14: {
        title: 'Samsung-Refrigerator',
        description: 'Description of Samsung-Refrigerator',
        price: 8000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdznUWhSYKdm-OLvg7VTgoRnWc_Mt5ccvEA&usqp=CAU"
      },
      15: {
        title: 'Whirlpool-Refrigerator-71229',
        description: 'Description of Whirlpool-Refrigerator-71229',
        price: 2500,
        image: 'https://5.imimg.com/data5/SA/JZ/MX/SELLER-2694128/whirlpool-refrigerator-71229.jpg'
      },
      16: {
        title: 'Godrej Refrigerator',
        description: 'Description of Godrej Refrigerator',
        price: 2400,
        image: 'https://salesindia.com/media/catalog/product/cache/6d3f693bbb26adda7ca0b9b35d930444/i/m/image_1_332.jpg'
      },
      17: {
        title: 'Noise Watch',
        description: 'Description of Noise Watch',
        price: 50,
        image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-stainless-steel-case-gmt-watchface_09152020_carousel.jpg.large.jpg'
      },
      18: {
        title: 'Wallet',
        description: 'Description of Wallet',
        price: 15,
        image: 'https://imagescdn.thecollective.in/img/app/product/8/814549-9722873.jpg?w=206&auto=format'
      },
      19: {
        title: 'Realme',
        description: 'Description of Realme',
        price: 400,
        image: 'https://image01.realme.net/general/20230608/1686196022115999db44b3b1f4b15a2756c8618202639.png.webp?width=1440&height=1440&size=590623'
      },
      20: {
        title: 'Sony TV',
        description: 'Description of Sony TV',
        price: 200,
        image: 'https://motorolain.vtexassets.com/arquivos/ids/158092-800-auto?width=800&height=auto&aspect=true'
      },

    };
  
    return products[productId];
  }
  
  