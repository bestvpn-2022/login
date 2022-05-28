var vee_config={locale:"nl",validity:!0};Vue.use(VeeValidate,vee_config),Vue.filter("valuta",(function(a){var e={symbol:"",decimal:hwc_data.decimaal_scheidingsteken,thousand:hwc_data.duizendtal_scheidingsteken,precision:2,format:"%s%v"};return accounting.formatMoney(a,e)}));var mini_cart=new Vue({delimiters:["${","}"],el:"#cart-qty",data(){return{totaal_in_cart:this.hwc_totaal_in_cart()}},mounted:function(){$("#cart-qty").removeClass("invisible"),$(".cloak").removeClass("invisible")},methods:{hwc_totaal_in_cart:function(){var a=this,e=hwc_data.ajax_url;axios.get(e,{params:{action:"hwc_totaal_aantal_in_winkelwagentje"}}).then((function(e){a.totaal_in_cart=e.data,0<a.totaal_in_cart&&(cart_empty=!1)})).catch((function(e){console.log(e),a.melding="Fout: "+e}))}}});if(document.getElementById("app"))var app=new Vue({delimiters:["${","}"],el:"#app",data:()=>({datum_van:new Date,datum_tot:new Date,dagen:1,factor:1,btwtarief:21,munteenheid:"EUR",landcode:hwc_data.landcode,taalcode:hwc_data.taalcode,materiaal:hwc_offerte_data.cart.items,materiaalkosten_excl_btw:0,bezorgkosten:0,opafbouw:0,opafbouwkosten:hwc_offerte_data.cart.totaal.totaal_opafbouwkosten,berekende_opafbouwkosten:0,servicepakket:"afhalen_amsterdam",label_servicepakket:"Afhalen Amsterdam",min_bedrag_levering_op_locatie_exclusief_opafbouw:hwc_data.levering_op_locatie_exclusief_opafbouw,min_bedrag_levering_op_locatie_inclusief_opafbouw:hwc_data.levering_op_locatie_inclusief_opafbouw,melding:"",melding_bezorgkosten:"",melding_huurperiode:"",aanvraag_type:"",label_aanvraag_type:"",bedrijf:"",voornaam:hwc_offerte_data.klantgegevens.voornaam,achternaam:hwc_offerte_data.klantgegevens.achternaam,factuurstraat:hwc_offerte_data.klantgegevens.factuurstraat,factuurhuisnummer:hwc_offerte_data.klantgegevens.factuurhuisnummer,factuurpostcode:hwc_offerte_data.klantgegevens.factuurpostcode,factuurplaats:hwc_offerte_data.klantgegevens.factuurplaats,factuurland:"NL",ander_factuurland:"",email:hwc_offerte_data.klantgegevens.email,telefoon:hwc_offerte_data.klantgegevens.telefoon,opmerkingen:hwc_offerte_data.klantgegevens.opmerkingen,aflever_venue:"",aflever_contactpersoon:"",aflever_telefoonnummer:"",aflever_straat:"",aflever_huisnummer:"",aflever_postcode:"",afleverplaats:"",gekozen_afleverplaats:"",afleverland:"NL",ander_afleverland:"",form_is_valid:!1,huurperiode_valid:!1,servicepakket_valid:!1,klantgegevens_valid:!1,offerte_stap:"",offerte_is_valid:!1}),created:function(){},mounted:function(){this.hwc_init()},watch:{materiaalkosten_excl_btw(a){},bezorgkosten(a){localStorage.bezorgkosten=a},opafbouw(a){localStorage.opafbouw=a},berekende_opafbouwkosten(a){localStorage.opafbouwkosten=a},dagen(a){localStorage.dagen=a},datum_van(a){localStorage.datum_van=a},datum_tot(a){localStorage.datum_tot=a},factor(a){localStorage.factor=a},taalcode(a){localStorage.taalcode=a},servicepakket(a){localStorage.servicepakket=a,this.hwc_label_servicepakket(a)},label_servicepakket(a){localStorage.label_servicepakket=a},aanvraag_type(a){var e="undefined"===a?"":a;"en"===this.taalcode&&"bedrijf"===e?this.label_aanvraag_type="company":"en"===this.taalcode&&"particulier"===e?this.label_aanvraag_type="private person":this.label_aanvraag_type=e,localStorage.aanvraag_type=e},bedrijf(a){var e="undefined"===a?"":a;localStorage.bedrijf=e},voornaam(a){var e="undefined"===a?"":a;localStorage.voornaam=e},achternaam(a){var e="undefined"===a?"":a;localStorage.achternaam=e},factuurstraat(a){var e="undefined"===a?"":a;localStorage.factuurstraat=e},factuurhuisnummer(a){var e="undefined"===a?"":a;localStorage.factuurhuisnummer=e},factuurpostcode(a){var e="undefined"===a?"":a;localStorage.factuurpostcode=e},factuurplaats(a){var e="undefined"===a?"":a;localStorage.factuurplaats=e},factuurland(a){var e="undefined"===a?"":a;localStorage.factuurland=e,"other"!==e?(this.ander_factuurland="",plaatsen_bestand=hwc_data.rentman_url+e.toUpperCase()+"_nl.json",this.hwc_plaatsen_auto_aanvullen(plaatsen_bestand),$("#factuurplaats").focus().select()):($("#factuurplaats").typeahead("destroy"),$("#ander-factuurland").focus())},ander_factuurland(a){var e="undefined"===a?"":a;localStorage.ander_factuurland=e},email(a){var e="undefined"===a?"":a;localStorage.email=e},telefoon(a){var e="undefined"===a?"":a;localStorage.telefoon=e},opmerkingen(a){var e="undefined"===a?"":a;localStorage.opmerkingen=e},aflever_venue(a){var e="undefined"===a?"":a;localStorage.aflever_venue=e},aflever_contactpersoon(a){var e="undefined"===a?"":a;localStorage.aflever_contactpersoon=e},aflever_telefoonnummer(a){var e="undefined"===a?"":a;localStorage.aflever_telefoonnummer=e},aflever_straat(a){var e="undefined"===a?"":a;localStorage.aflever_straat=e},aflever_huisnummer(a){var e="undefined"===a?"":a;localStorage.aflever_huisnummer=e},aflever_postcode(a){var e="undefined"===a?"":a;localStorage.aflever_postcode=e},afleverplaats(a){var e="undefined"===a?"":a;localStorage.afleverplaats=e},gekozen_afleverplaats(a){localStorage.gekozen_afleverplaats=a,this.hwc_bezorgkosten_berekenen()},afleverland(a){var e="undefined"===a?"":a;localStorage.afleverland=e,"other"!==e?(this.ander_afleverland="",plaatsen_bestand=hwc_data.rentman_url+e.toUpperCase()+"_nl.json",this.hwc_plaatsen_auto_aanvullen(plaatsen_bestand),$("#afleverplaats").focus().select()):(this.afleverplaats="",this.gekozen_afleverplaats="",this.bezorgkosten=0,$("#afleverplaats").typeahead("destroy"),$("#ander-afleverland").focus())},ander_afleverland(a){var e="undefined"===a?"":a;localStorage.ander_afleverland=e},offerte_stap(a){localStorage.offerte_stap=a},offerte_is_valid(a){localStorage.offerte_is_valid=a}},computed:{mat_excl_btw:function(){return parseFloat(this.materiaalkosten_excl_btw*this.factor)},mat_btw:function(){return this.mat_excl_btw/100*this.btwtarief},mat_incl_btw:function(){return this.mat_excl_btw+this.mat_btw},tot_excl_btw:function(){return this.mat_excl_btw+parseFloat(this.bezorgkosten)+parseFloat(this.berekende_opafbouwkosten)},tot_btw:function(){return this.tot_excl_btw/100*this.btwtarief},tot_incl_btw:function(){return this.tot_excl_btw+this.tot_btw},form_valid:function(){this.hwc_validate()}},methods:{hwc_init:function(){var a=this;a.hwc_get_query_var("stap"),a.hwc_local_storage(),a.hwc_plaatsen_laden(),a.melding_huurperiode="Rental period: "+a.dagen+" days. Costs: "+a.munteenheid+" "+a.materiaalkosten_excl_btw+" x "+a.factor+"</span> (multi-day discount factor)",$('input:text[name="datum_van"], input:text[name="datum_tot"]').datepicker({format:"dd-mm-yyyy",language:"nl",startDate:new Date,autoclose:!0}).on("changeDate",(function(e){a.datum_van=$('input[name="datum_van"]').val(),a.datum_tot=$('input[name="datum_tot"]').val(),a.hwc_get_dagen(),parseInt(a.dagen)<1&&($('input[name="datum_tot"]').val($('input[name="datum_van"]').val()),$('input:text[name="datum_tot"]').datepicker("update",$('input[name="datum_van"]').val()),a.datum_van=$('input[name="datum_van"]').val(),a.datum_tot=$('input[name="datum_tot"]').val(),a.hwc_get_dagen()),a.hwc_factor_berekenen()})),$('input:radio[name="methode"]').change((function(){a.servicepakket=this.value,a.hwc_servicepakket_selecteren()})),$('input:radio[name="methode"]').each((function(e,t){a.servicepakket==$(this).val()&&($(this).prop("checked",!0),$("#gekozen-methode").val($(this).val()))}))},hwc_validate:function(){this.$validator.validateAll().then((a=>{if(a&&("huurperiode"===this.offerte_stap?(this.huurperiode_valid=!0,localStorage.huurperiode_valid=!0):"servicepakket"===this.offerte_stap?(this.servicepakket_valid=!0,localStorage.servicepakket_valid=!0):"klantgegevens"===this.offerte_stap&&(this.klantgegevens_valid=!0,localStorage.klantgegevens_valid=!0),this.form_is_valid=!0,this.hwc_offerte_valid()),!a)return"huurperiode"===this.offerte_stap?(this.huurperiode_valid=!1,localStorage.huurperiode_valid=!1):"servicepakket"===this.offerte_stap?(this.servicepakket_valid=!1,localStorage.servicepakket_valid=!1):"klantgegevens"===this.offerte_stap&&(this.klantgegevens_valid=!1,localStorage.klantgegevens_valid=!1),this.form_is_valid=!1,this.hwc_offerte_valid(),!1}))},hwc_offerte_valid:function(){!0===this.huurperiode_valid&&!0===this.servicepakket_valid&&!0===this.klantgegevens_valid?this.offerte_is_valid=!0:this.offerte_is_valid=!1},hwc_offerte_subpagina_laden:function(a){document.location.assign("/winkelwagen")},hwc_totaal_in_cart:function(){var a=this,e=hwc_data.ajax_url;axios.get(e,{params:{action:"hwc_totaal_aantal_in_winkelwagentje"}}).then((function(e){a.totaal_in_cart=e.data})).catch((function(e){console.log(e),a.melding="Fout: "+e}))},hwc_local_storage:function(){hwc_offerte_data.cart.totaal&&(hwc_offerte_data.cart.totaal.datum_van&&(this.datum_van=hwc_offerte_data.cart.totaal.datum_van),hwc_offerte_data.cart.totaal.datum_tot&&(this.datum_tot=hwc_offerte_data.cart.totaal.datum_tot),hwc_offerte_data.cart.totaal.factor&&(this.factor=hwc_offerte_data.cart.totaal.factor),hwc_offerte_data.cart.totaal.btwtarief&&(this.btwtarief=hwc_offerte_data.cart.totaal.btwtarief),hwc_offerte_data.cart.totaal.totaal_excl&&(this.materiaalkosten_excl_btw=hwc_offerte_data.cart.totaal.totaal_excl),hwc_offerte_data.cart.totaal.opafbouw&&(this.opafbouw=hwc_offerte_data.cart.totaal.opafbouw),hwc_offerte_data.cart.totaal.servicepakket&&(this.servicepakket=hwc_offerte_data.cart.totaal.servicepakket),hwc_offerte_data.cart.totaal.dagen&&(this.dagen=hwc_offerte_data.cart.totaal.dagen)),localStorage.datum_van?this.datum_van=localStorage.datum_van:localStorage.datum_van=this.datum_van,localStorage.datum_tot?this.datum_tot=localStorage.datum_tot:localStorage.datum_tot=this.datum_tot,localStorage.dagen?this.dagen=localStorage.dagen:localStorage.dagen=this.dagen,localStorage.factor?this.factor=localStorage.factor:localStorage.factor=this.factor,localStorage.btwtarief?this.btwtarief=localStorage.btwtarief:localStorage.btwtarief=this.btwtarief,localStorage.opafbouw?this.opafbouw=localStorage.opafbouw:localStorage.opafbouw=0,localStorage.taalcode=this.taalcode,localStorage.servicepakket?(parseFloat(this.min_bedrag_levering_op_locatie_exclusief_opafbouw)>this.mat_excl_btw?"afleveren_locatie_excl_opafbouw"!==localStorage.servicepakket&&"afleveren_locatie_incl_opafbouw"!==localStorage.servicepakket||(localStorage.servicepakket="afhalen_amsterdam",localStorage.opafbouwkosten=0,localStorage.bezorgkosten=0,localStorage.afleverplaats="",localStorage.gekozen_afleverplaats=""):parseFloat(this.min_bedrag_levering_op_locatie_inclusief_opafbouw)>this.mat_excl_btw&&"afleveren_locatie_incl_opafbouw"===localStorage.servicepakket&&(localStorage.servicepakket="afleveren_locatie_excl_opafbouw",localStorage.opafbouwkosten=0),this.servicepakket=localStorage.servicepakket,this.hwc_label_servicepakket(this.servicepakket)):localStorage.servicepakket=this.servicepakket,localStorage.gekozen_afleverplaats?this.gekozen_afleverplaats=localStorage.gekozen_afleverplaats:localStorage.gekozen_afleverplaats=this.gekozen_afleverplaats,localStorage.bezorgkosten?this.bezorgkosten=parseFloat(localStorage.bezorgkosten):localStorage.bezorgkosten=this.bezorgkosten,localStorage.opafbouwkosten?this.berekende_opafbouwkosten=parseInt(localStorage.opafbouwkosten):(localStorage.opafbouwkosten=0,hwc_offerte_data.cart.totaal.totaal_opafbouwkosten&&"afleveren_locatie_incl_opafbouw"===this.servicepakket?(this.berekende_opafbouwkosten=hwc_offerte_data.cart.totaal.totaal_opafbouwkosten,localStorage.opafbouwkosten=this.berekende_opafbouwkosten):localStorage.opafbouwkosten=0),localStorage.aanvraag_type?this.aanvraag_type=localStorage.aanvraag_type:localStorage.aanvraag_type=this.aanvraag_type,localStorage.bedrijf?this.bedrijf=localStorage.bedrijf:localStorage.bedrijf=this.bedrijf,localStorage.voornaam?this.voornaam=void 0===localStorage.voornaam?"":localStorage.voornaam:localStorage.voornaam=this.voornaam,localStorage.achternaam?this.achternaam=localStorage.achternaam:localStorage.achternaam=this.achternaam,localStorage.factuurstraat?this.factuurstraat=localStorage.factuurstraat:localStorage.factuurstraat=this.factuurstraat,localStorage.factuurhuisnummer?this.factuurhuisnummer=localStorage.factuurhuisnummer:localStorage.factuurhuisnummer=this.factuurhuisnummer,localStorage.factuurpostcode?this.factuurpostcode=localStorage.factuurpostcode:localStorage.factuurpostcode=this.factuurpostcode,localStorage.factuurplaats?this.factuurplaats=localStorage.factuurplaats:localStorage.factuurplaats=this.factuurplaats,localStorage.email?this.email=localStorage.email:localStorage.email=this.email,localStorage.telefoon?this.telefoon=localStorage.telefoon:localStorage.telefoon=this.telefoon,localStorage.opmerkingen?this.opmerkingen=localStorage.opmerkingen:localStorage.opmerkingen=this.opmerkingen,localStorage.factuurland?this.factuurland=localStorage.factuurland:localStorage.factuurland=this.factuurland,localStorage.ander_factuurland?this.ander_factuurland=localStorage.ander_factuurland:localStorage.ander_factuurland=this.ander_factuurland,localStorage.aflever_venue?this.aflever_venue=localStorage.aflever_venue:localStorage.aflever_venue=this.aflever_venue,localStorage.aflever_contactpersoon?this.aflever_contactpersoon=localStorage.aflever_contactpersoon:localStorage.aflever_contactpersoon=this.aflever_contactpersoon,localStorage.aflever_telefoonnummer?this.aflever_telefoonnummer=localStorage.aflever_telefoonnummer:localStorage.aflever_telefoonnummer=this.aflever_telefoonnummer,localStorage.aflever_straat?this.aflever_straat=localStorage.aflever_straat:localStorage.aflever_straat=this.aflever_straat,localStorage.aflever_huisnummer?this.aflever_huisnummer=localStorage.aflever_huisnummer:localStorage.aflever_huisnummer=this.aflever_huisnummer,localStorage.aflever_postcode?this.aflever_postcode=localStorage.aflever_postcode:localStorage.aflever_postcode=this.aflever_postcode,localStorage.afleverplaats?this.afleverplaats=localStorage.afleverplaats:localStorage.afleverplaats=this.afleverplaats,localStorage.gekozen_afleverplaats?this.gekozen_afleverplaats=localStorage.gekozen_afleverplaats:localStorage.gekozen_afleverplaats=this.gekozen_afleverplaats,localStorage.afleverland?this.afleverland=localStorage.afleverland:localStorage.afleverland=this.afleverland,localStorage.ander_afleverland?this.ander_afleverland=localStorage.ander_afleverland:localStorage.ander_afleverland=this.ander_afleverland,localStorage.huurperiode_valid&&(this.huurperiode_valid="true"===localStorage.huurperiode_valid),localStorage.servicepakket_valid&&(this.servicepakket_valid="true"===localStorage.servicepakket_valid),localStorage.klantgegevens_valid&&(this.klantgegevens_valid="true"===localStorage.klantgegevens_valid),localStorage.offerte_is_valid&&(this.offerte_is_valid="true"===localStorage.offerte_is_valid)},hwc_item_uit_winkelwagen:function(a){var e=this,t=hwc_data.ajax_url;axios.get(t,{params:{action:"hwc_item_uit_winkelwagentje",itemid:a}}).then((function(a){console.log("item verwijderen"),window.location.reload()})).catch((function(a){console.log(a),e.melding="Fout: "+a}))},hwc_get_query_var:function(a){var e=window.location.search.substring(1).split("&");this.offerte_stap="huurperiode";for(var t=0;t<e.length;t++){var o=e[t].split("=");if(o[0]==a){this.offerte_stap=o[1];break}}},hwc_get_dagen:function(){var a=this;a.dagen=a.hwc_day_diff(a.hwc_parse_date(this.datum_van),a.hwc_parse_date(this.datum_tot))+1},hwc_get_opafbouwkosten:function(){this.opafbouwkosten=this.opafbouwkosten},hwc_servicepakket_selecteren:function(){var a=this;$("#gekozen-methode").val(a.servicepakket),"afleveren_locatie_excl_opafbouw"===a.servicepakket?(a.opafbouw=0,a.berekende_opafbouwkosten=0):"afleveren_locatie_incl_opafbouw"===a.servicepakket?(a.opafbouw=1,a.berekende_opafbouwkosten=a.opafbouwkosten):(a.opafbouw=0,a.berekende_opafbouwkosten=0,a.bezorgkosten=0,localStorage.bezorgkosten=0,a.afleverplaats="",a.gekozen_afleverplaats="")},hwc_label_servicepakket:function(a){var e=this;switch(a){case"afhalen_amsterdam":lbl="Afhalen in Amsterdam",lbl_en="Pick up Amsterdam";break;case"afhalen_breda":lbl="Afhalen in Breda",lbl_en="Pick up Breda";break;case"afleveren_locatie_excl_opafbouw":lbl="Afleveren op locatie, exclusief op- en afbouw",lbl_en="Delivered at your venue, excluding setup and dismantle";break;case"afleveren_locatie_incl_opafbouw":lbl="Afleveren op locatie, inclusief op- en afbouw",lbl_en="Delivered at your venue, including setup and dismantle";break;default:lbl="[onbekend]",lbl_en="[unknown]"}"en"===e.taalcode?e.label_servicepakket=lbl_en:e.label_servicepakket=lbl},hwc_offerte_aanvraag_versturen:function(){var a=this,e=hwc_data.ajax_url,t=new FormData;t.append("action","hwc_prijsaanvraag"),t.append("servicepakket",a.label_servicepakket),t.append("servicepakket_waarde",a.servicepakket),t.append("opmerkingen",a.opmerkingen),t.append("taalcode",a.taalcode),t.append("type_aanvraag",a.aanvraag_type),t.append("bedrijf",a.bedrijf),t.append("voornaam",a.voornaam),t.append("achternaam",a.achternaam),t.append("email",a.email),t.append("telefoon",a.telefoon),t.append("factuurstraat",a.factuurstraat),t.append("factuurhuisnummer",a.factuurhuisnummer),t.append("factuurpostcode",a.factuurpostcode),t.append("factuurplaats",a.factuurplaats),t.append("land",a.factuurland),t.append("factuurland",a.factuurland),t.append("ander_factuurland",a.ander_factuurland),t.append("aflever_venue",a.aflever_venue),t.append("aflever_contactpersoon",a.aflever_contactpersoon),t.append("aflever_telefoonnummer",a.aflever_telefoonnummer),t.append("aflever_straat",a.aflever_straat),t.append("aflever_huisnummer",a.aflever_huisnummer),t.append("aflever_postcode",a.aflever_postcode),t.append("afleverplaats",a.afleverplaats),t.append("afleverland",a.afleverland),t.append("ander_afleverland",a.ander_afleverland),t.append("datum_van",a.datum_van),t.append("datum_tot",a.datum_tot),t.append("dagen",a.dagen),t.append("factor",a.factor),t.append("bezorgkosten",a.bezorgkosten),t.append("opafbouw",a.opafbouw),t.append("opafbouwkosten",a.berekende_opafbouwkosten),t.append("totaal_materiaal_excl",a.mat_excl_btw),t.append("totaal_transport_excl",a.bezorgkosten),t.append("totaal_opafbouwkosten_excl",a.berekende_opafbouwkosten),t.append("totaal_excl_btw",a.tot_excl_btw),t.append("totaal_btw",a.tot_btw),t.append("totaal_incl_btw",a.tot_incl_btw),t.append("materiaal",a.materiaal),t.append("btwtarief",a.btwtarief),t.append("munteenheid",a.munteenheid),axios.post(e,t).then((function(e){a.hwc_melding("Offerte aanvraag is verstuurd",!1),a.hwc_redirect()})).catch((function(e){console.log(e),a.melding="Error! Could not reach the API. "+e}))},hwc_localstorage_leegmaken:function(){localStorage.clear()},hwc_redirect:function(){window.location.replace("/bedankt")},hwc_servicepakket_opslaan:function(a){var e=this,t=hwc_data.ajax_url;axios.get(t,{params:{action:"hwc_servicepakket_opslaan",servicepakket:e.servicepakket}}).then((function(a){e.servicepakket=a.data})).catch((function(a){console.log(a),e.melding="Error! Could not reach the API. "+a}))},hwc_melding:function(a,e){$("#melding").html(a).show("slow"),1==e&&$("#cart-ico").addClass("wordt-bijgewerkt"),setTimeout((function(){$("#melding").hide("slow")}),2500)},hwc_parse_date:function(a){var e=a.split("-");return new Date(e[2],e[1]-1,e[0])},hwc_day_diff:function(a,e){return Math.round((e-a)/864e5)},hwc_bezorgkosten_berekenen:function(){var a,e=this,t=hwc_data.ajax_url;void 0===e.gekozen_afleverplaats||""===e.gekozen_afleverplaats?(e.gekozen_afleverplaats=a="",e.berekende_bezorgkosten=0,e.melding_bezorgkosten="[Nog niet bekend]"):0<e.gekozen_afleverplaats.length?(a=e.gekozen_afleverplaats.replace("'",""),e.melding_bezorgkosten="",0<a.length&&axios.get(t,{params:{action:"hwc_bezorgkosten_berekenen",plaats:a}}).then((function(a){e.bezorgkosten=a.data})).catch((function(a){console.log(a),e.melding="Error! Could not reach the API. "+a}))):(a="",e.melding_bezorgkosten="[Nog niet bekend]")},hwc_factor_berekenen:function(){var a=(t=this).hwc_day_diff(t.hwc_parse_date(this.datum_van),t.hwc_parse_date(this.datum_tot))+1,e=hwc_data.ajax_url,t=this;axios.get(e,{params:{action:"hwc_factor_berekenen",van:t.datum_van,tot:t.datum_tot,dagen:a}}).then((function(a){t.factor=a.data,t.melding_huurperiode="Rental period: "+t.dagen+" days. Costs: "+t.munteenheid+" "+t.materiaalkosten_excl_btw+" x "+t.factor+"</span> (multi-day discount factor)"})).catch((function(a){console.log(a),t.melding="Error! Could not reach the API. "+a}))},hwc_kosten_opafbouw_opslaan:function(a){var e=this,t=(a=parseInt(a),hwc_data.ajax_url);axios.get(t,{params:{action:"hwc_kosten_opafbouw_opslaan",opafbouw:a,kosten_opafbouw:e.opafbouwkosten}}).then((function(a){e.berekende_opafbouwkosten=a.data})).catch((function(a){console.log(a),e.melding="Error! Could not reach the API. "+a}))},hwc_plaatsen_laden:function(){var a,e=this;$(document).ready((function(){"other"===$("#factuurland").val()||"other"===$("#afleverland").val()||(a=hwc_data.plaatsen_json,e.hwc_plaatsen_auto_aanvullen(a))}))},hwc_plaatsen_auto_aanvullen:function(a){var e=this;if(t)t.clear();else var t=new Bloodhound({initialize:!1,cache:!1,datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:a});t.initialize(),$("#factuurplaats, #afleverplaats").typeahead("destroy"),$("#factuurplaats").typeahead({hint:!1,highlight:!0,minLength:2,classNames:{hint:"plaatsen-hint",selectable:"factuurplaatsen-term",menu:"plaatsen-menu",dataset:"plaatsen-dataset",input:"factuurplaats"}},{name:"plaatsen",source:t}),$("#afleverplaats").typeahead({hint:!1,highlight:!0,minLength:2,classNames:{hint:"plaatsen-hint",selectable:"afleverplaatsen-term",menu:"plaatsen-menu",dataset:"plaatsen-dataset",input:"factuurplaats"}},{name:"plaatsen",source:t}),$("#factuurplaats, #afleverplaats").bind("typeahead:select change blur",(function(a,t){$("#factuurplaats").on("blur",(function(){!1,void 0===t&&"other"!==$("#factuurland").val()?e.factuurplaats=$(this).val():!0})),$("#afleverplaats").on("focus",(function(){$(this).select()})),$("#afleverplaats").on("blur",(function(){!1,void 0===t&&"other"!==$("#afleverland").val()?e.afleverplaats=$(this).val():!0,e.afleverplaats=e.gekozen_afleverplaats=$(this).val()}))}))}}});