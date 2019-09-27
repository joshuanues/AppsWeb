var Catalla = {
	"categorias": [{
			"categoria": "Infantil niña",
			"tallas": ["0 meses", "3 meses", "6 meses", "12 meses", "2-3 años", "4-5 años", "6-7 años", "8-9 años", "10-11 años", "12-14 años"]
	},                                        
		{
			"categoria": "Infanti niño",
			"tallas": ["0 meses", "3 meses", "6 meses", "12 meses", "2-3 años", "4-5 años", "6-7 años", "8-9 años", "10-11 años", "12-14 años"]
	},
		{
			"categoria": "Infantil unisex",
			"tallas": ["0 meses", "3 meses", "6 meses", "12 meses", "2-3 años", "4-5 años", "6-7 años", "8-9 años", "10-11 años", "12-14 años"]
	},
		{
			"categoria": "Mujer".
			"tallas":["XS", "S", "M", "L", "XL", "XXL"]
	},
		{
			"categoria": "Hombre".
			"tallas":["XS", "S", "M", "L", "XL", "XXL"]
	},
		{
			"categoria": "Adulto unisex".
			"tallas":["XS", "S", "M", "L", "XL", "XXL"]
	}]
}


jQuery(document).ready(function () {

	var iCategoria = 0;
	var htmlCategoria = '<option value="sin-categoria">Seleccione categoría</option><option value="sin-categoria">--</option>';
	var htmlTallas = '<option value="sin-categoria">Seleccione talla</option><option value="sin-categoria">--</option>';

	jQuery.each(Catalla.categorias, function () {
		htmlCategoria = htmlCategoria + '<option value="' + catalla.categorias[iCategoria].categoria + '">' + catalla.categorias[iCategoria].categoria + '</option>';
		iCategoria++;
	});

	jQuery('#categorias').html(htmlCategoria);
	jQuery('#talla').html(htmlTallas);

	jQuery('#categorias').change(function () {
		var iCategoria = 0;
		var valorCat = jQuery(this).val();
		var htmlTallas = '<option value="sin-talla">Seleccione talla</option><option value="sin-talla">--</option>';
		jQuery.each(catalla.categorias, function () {
			if (catalla.categorias[iCategoria].categoria == valorCat) {
				var iTalla = 0;
				jQuery.each(catalla.categorias[iCategoria].tallas, function () {
					htmlTallas = htmlTallas + '<option value="' + catalla.categorias[iCategoria].tallas[iTalla] + '">' + catalla.categorias[iCategoria].tallas[iTalla] + '</option>';
					iTalla++;
				});
			}
			iCategoria++;
		});
		jQuery('#talla').html(htmlTallas);
	});
	jQuery('#talla').change(function () {
		if (jQuery(this).val() == 'sin-categoria') {
			alert('seleccione categoria');
		} else if (jQuery(this).val() == 'sin-talla') {
			alert('seleccione talla');
		}
	});
	jQuery('#categorias').change(function () {
		if (jQuery(this).val() == 'sin-categoria') {
			alert('seleccione categoria');
		}
	});

});