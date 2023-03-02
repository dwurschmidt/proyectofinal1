//-------------------------------------------------------------
// BASE -------------------------------------------------------
//-------------------------------------------------------------

function get_edad1(fc,ed){
	var fc = new Date(document.getElementById(fc).val());
	var ho = new Date();
    var an = ho.getFullYear() - fc.getFullYear();
    var me = fc.getMonth() - ho.getMonth();
	var di = fc.getDate() - ho.getDate();
    if (me < 0) { document.getElementById(ed).val(an--); }
	if (me === 0 && (di+1) < 0) { document.getElementById(ed).val(an--); }
	document.getElementById(ed).val(an);
};

function get_edad(fc,ed){
	var fc = new Date($(fc).val());
	var ho = new Date();
    var an = ho.getFullYear() - fc.getFullYear();
    var me = fc.getMonth() - ho.getMonth();
	var di = fc.getDate() - ho.getDate();
    if (me < 0) { $(ed).val(an--); }
	if (me === 0 && (di+1) < 0) { $(ed).val(an--); }
	$(ed).val(an);
};

//-------------------------------------------------------------
// MENU -------------------------------------------------------
//-------------------------------------------------------------

function menu_tabb(id) {
	jQuery(".mdc-tab").removeClass("mdc-tab--active");
	jQuery("#mdc-tab-"+id).addClass("mdc-tab--active");
	jQuery(".mdc-tab-indicator").removeClass("mdc-tab-indicator--active");
	jQuery("#mdc-tab-indicator-"+id).addClass("mdc-tab-indicator--active");
	jQuery(".ssec").fadeOut(10);
	jQuery("#ssec-"+id).slideToggle(200);
}

