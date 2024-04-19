var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Limitadministrativ_1 = new ol.format.GeoJSON();
var features_Limitadministrativ_1 = format_Limitadministrativ_1.readFeatures(json_Limitadministrativ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitadministrativ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitadministrativ_1.addFeatures(features_Limitadministrativ_1);
var lyr_Limitadministrativ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitadministrativ_1, 
                style: style_Limitadministrativ_1,
                popuplayertitle: "Limită administrativă",
                interactive: false,
                title: '<img src="styles/legend/Limitadministrativ_1.png" /> Limită administrativă'
            });
var format_Circumscriptii_2 = new ol.format.GeoJSON();
var features_Circumscriptii_2 = format_Circumscriptii_2.readFeatures(json_Circumscriptii_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circumscriptii_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circumscriptii_2.addFeatures(features_Circumscriptii_2);
var lyr_Circumscriptii_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Circumscriptii_2, 
                style: style_Circumscriptii_2,
                popuplayertitle: "Circumscriptii",
                interactive: false,
                title: '<img src="styles/legend/Circumscriptii_2.png" /> Circumscriptii'
            });
var format_15minute_3 = new ol.format.GeoJSON();
var features_15minute_3 = format_15minute_3.readFeatures(json_15minute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15minute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15minute_3.addFeatures(features_15minute_3);
var lyr_15minute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15minute_3, 
                style: style_15minute_3,
                popuplayertitle: "15 minute",
                interactive: false,
                title: '<img src="styles/legend/15minute_3.png" /> 15 minute'
            });
var format_10minute_4 = new ol.format.GeoJSON();
var features_10minute_4 = format_10minute_4.readFeatures(json_10minute_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minute_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minute_4.addFeatures(features_10minute_4);
var lyr_10minute_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minute_4, 
                style: style_10minute_4,
                popuplayertitle: "10 minute",
                interactive: false,
                title: '<img src="styles/legend/10minute_4.png" /> 10 minute'
            });
var format_5minute_5 = new ol.format.GeoJSON();
var features_5minute_5 = format_5minute_5.readFeatures(json_5minute_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5minute_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5minute_5.addFeatures(features_5minute_5);
var lyr_5minute_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5minute_5, 
                style: style_5minute_5,
                popuplayertitle: "5 minute",
                interactive: false,
                title: '<img src="styles/legend/5minute_5.png" /> 5 minute'
            });
var format_Unitidenvmnt_6 = new ol.format.GeoJSON();
var features_Unitidenvmnt_6 = format_Unitidenvmnt_6.readFeatures(json_Unitidenvmnt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unitidenvmnt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unitidenvmnt_6.addFeatures(features_Unitidenvmnt_6);
var lyr_Unitidenvmnt_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unitidenvmnt_6, 
                style: style_Unitidenvmnt_6,
                popuplayertitle: "Unități de învățământ",
                interactive: true,
                title: '<img src="styles/legend/Unitidenvmnt_6.png" /> Unități de învățământ'
            });

lyr_CartoDark_0.setVisible(true);lyr_Limitadministrativ_1.setVisible(true);lyr_Circumscriptii_2.setVisible(true);lyr_15minute_3.setVisible(true);lyr_10minute_4.setVisible(true);lyr_5minute_5.setVisible(true);lyr_Unitidenvmnt_6.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_Limitadministrativ_1,lyr_Circumscriptii_2,lyr_15minute_3,lyr_10minute_4,lyr_5minute_5,lyr_Unitidenvmnt_6];
lyr_Limitadministrativ_1.set('fieldAliases', {'Id': 'Id', 'IFCID': 'IFCID', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'country': 'country', 'natLevel': 'natLevel', 'natLevName': 'natLevName', 'natCode': 'natCode', 'name': 'name', 'resOfAut': 'resOfAut', 'beginVers': 'beginVers', 'endVersion': 'endVersion', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Circumscriptii_2.set('fieldAliases', {'fid': 'fid', 'Trup': 'Trup', 'Denumire': 'Denumire', 'Nr_Schimbu': 'Nr_Schimbu', 'Schimb_1': 'Schimb_1', 'Schimb_2': 'Schimb_2', 'Schimb_3': 'Schimb_3', 'Nr_săli_o': 'Nr_săli_o', 'Laboratoar': 'Laboratoar', 'Săli_clas': 'Săli_clas', 'Personal_c': 'Personal_c', 'Personal_n': 'Personal_n', 'Personal_1': 'Personal_1', 'Sector': 'Sector', 'Adrese_Lim': 'Adrese_Lim', 'Cod_SIIIR': 'Cod_SIIIR', 'Observați': 'Observați', 'Autor': 'Autor', 'Dată_crea': 'Dată_crea', });
lyr_15minute_3.set('fieldAliases', {'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'CF': 'CF', 'SIIIR': 'SIIIR', 'Statutul': 'Statutul', 'Unit_înv': 'Unit_înv', 'Observ': 'Observ', 'Tip_unit': 'Tip_unit', 'Coduri': 'Coduri', 'Creșă': 'Creșă', 'Preșcolar': 'Preșcolar', 'Primar': 'Primar', 'Gimnazial': 'Gimnazial', 'Liceal': 'Liceal', 'Vocaționa': 'Vocaționa', 'Profes': 'Profes', 'Postliceal': 'Postliceal', 'Uni': 'Uni', 'Special': 'Special', 'Club': 'Club', 'Adresă': 'Adresă', 'Cod_poșta': 'Cod_poșta', 'Localitate': 'Localitate', 'Sector': 'Sector', 'E_mail': 'E_mail', 'Website': 'Website', 'Telefon': 'Telefon', 'Tip_propri': 'Tip_propri', 'Nr_elevi': 'Nr_elevi', 'Schimbul_1': 'Schimbul_1', 'Schimbul_2': 'Schimbul_2', 'Schimbul_3': 'Schimbul_3', 'Mod_funcț': 'Mod_funcț', 'Nr_schimb': 'Nr_schimb', 'Săli_clas': 'Săli_clas', 'Laborat': 'Laborat', 'Sală_mese': 'Sală_mese', 'Biblio': 'Biblio', 'Cămin': 'Cămin', 'Sală_spor': 'Sală_spor', 'Teren_ext': 'Teren_ext', 'Bazin_îno': 'Bazin_îno', 'Atelier': 'Atelier', 'Cab_medic': 'Cab_medic', 'Total_săl': 'Total_săl', 'Pers_cali': 'Pers_cali', 'Pers_necal': 'Pers_necal', 'Pers_neces': 'Pers_neces', 'Sursă_inf': 'Sursă_inf', 'Data_recep': 'Data_recep', 'Autor': 'Autor', 'circumsc �': 'circumsc �', 'id': 'id', 'type': 'type', 'start': 'start', });
lyr_10minute_4.set('fieldAliases', {'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'CF': 'CF', 'SIIIR': 'SIIIR', 'Statutul': 'Statutul', 'Unit_înv': 'Unit_înv', 'Observ': 'Observ', 'Tip_unit': 'Tip_unit', 'Coduri': 'Coduri', 'Creșă': 'Creșă', 'Preșcolar': 'Preșcolar', 'Primar': 'Primar', 'Gimnazial': 'Gimnazial', 'Liceal': 'Liceal', 'Vocaționa': 'Vocaționa', 'Profes': 'Profes', 'Postliceal': 'Postliceal', 'Uni': 'Uni', 'Special': 'Special', 'Club': 'Club', 'Adresă': 'Adresă', 'Cod_poșta': 'Cod_poșta', 'Localitate': 'Localitate', 'Sector': 'Sector', 'E_mail': 'E_mail', 'Website': 'Website', 'Telefon': 'Telefon', 'Tip_propri': 'Tip_propri', 'Nr_elevi': 'Nr_elevi', 'Schimbul_1': 'Schimbul_1', 'Schimbul_2': 'Schimbul_2', 'Schimbul_3': 'Schimbul_3', 'Mod_funcț': 'Mod_funcț', 'Nr_schimb': 'Nr_schimb', 'Săli_clas': 'Săli_clas', 'Laborat': 'Laborat', 'Sală_mese': 'Sală_mese', 'Biblio': 'Biblio', 'Cămin': 'Cămin', 'Sală_spor': 'Sală_spor', 'Teren_ext': 'Teren_ext', 'Bazin_îno': 'Bazin_îno', 'Atelier': 'Atelier', 'Cab_medic': 'Cab_medic', 'Total_săl': 'Total_săl', 'Pers_cali': 'Pers_cali', 'Pers_necal': 'Pers_necal', 'Pers_neces': 'Pers_neces', 'Sursă_inf': 'Sursă_inf', 'Data_recep': 'Data_recep', 'Autor': 'Autor', 'circumsc �': 'circumsc �', 'id': 'id', 'type': 'type', 'start': 'start', });
lyr_5minute_5.set('fieldAliases', {'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'CF': 'CF', 'SIIIR': 'SIIIR', 'Statutul': 'Statutul', 'Unit_înv': 'Unit_înv', 'Observ': 'Observ', 'Tip_unit': 'Tip_unit', 'Coduri': 'Coduri', 'Creșă': 'Creșă', 'Preșcolar': 'Preșcolar', 'Primar': 'Primar', 'Gimnazial': 'Gimnazial', 'Liceal': 'Liceal', 'Vocaționa': 'Vocaționa', 'Profes': 'Profes', 'Postliceal': 'Postliceal', 'Uni': 'Uni', 'Special': 'Special', 'Club': 'Club', 'Adresă': 'Adresă', 'Cod_poșta': 'Cod_poșta', 'Localitate': 'Localitate', 'Sector': 'Sector', 'E_mail': 'E_mail', 'Website': 'Website', 'Telefon': 'Telefon', 'Tip_propri': 'Tip_propri', 'Nr_elevi': 'Nr_elevi', 'Schimbul_1': 'Schimbul_1', 'Schimbul_2': 'Schimbul_2', 'Schimbul_3': 'Schimbul_3', 'Mod_funcț': 'Mod_funcț', 'Nr_schimb': 'Nr_schimb', 'Săli_clas': 'Săli_clas', 'Laborat': 'Laborat', 'Sală_mese': 'Sală_mese', 'Biblio': 'Biblio', 'Cămin': 'Cămin', 'Sală_spor': 'Sală_spor', 'Teren_ext': 'Teren_ext', 'Bazin_îno': 'Bazin_îno', 'Atelier': 'Atelier', 'Cab_medic': 'Cab_medic', 'Total_săl': 'Total_săl', 'Pers_cali': 'Pers_cali', 'Pers_necal': 'Pers_necal', 'Pers_neces': 'Pers_neces', 'Sursă_inf': 'Sursă_inf', 'Data_recep': 'Data_recep', 'Autor': 'Autor', 'circumsc �': 'circumsc �', 'id': 'id', 'type': 'type', 'start': 'start', });
lyr_Unitidenvmnt_6.set('fieldAliases', {'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'CF': 'CF', 'SIIIR': 'SIIIR', 'Statutul': 'Statutul', 'Unit_înv': 'Unit_înv', 'Observ': 'Observ', 'Tip_unit': 'Tip_unit', 'Coduri': 'Coduri', 'Creșă': 'Creșă', 'Preșcolar': 'Preșcolar', 'Primar': 'Primar', 'Gimnazial': 'Gimnazial', 'Liceal': 'Liceal', 'Vocaționa': 'Vocaționa', 'Profes': 'Profes', 'Postliceal': 'Postliceal', 'Uni': 'Uni', 'Special': 'Special', 'Club': 'Club', 'Adresă': 'Adresă', 'Cod_poșta': 'Cod_poșta', 'Localitate': 'Localitate', 'Sector': 'Sector', 'E_mail': 'E_mail', 'Website': 'Website', 'Telefon': 'Telefon', 'Tip_propri': 'Tip_propri', 'Nr_elevi': 'Nr_elevi', 'Schimbul_1': 'Schimbul_1', 'Schimbul_2': 'Schimbul_2', 'Schimbul_3': 'Schimbul_3', 'Mod_funcț': 'Mod_funcț', 'Nr_schimb': 'Nr_schimb', 'Săli_clas': 'Săli_clas', 'Laborat': 'Laborat', 'Sală_mese': 'Sală_mese', 'Biblio': 'Biblio', 'Cămin': 'Cămin', 'Sală_spor': 'Sală_spor', 'Teren_ext': 'Teren_ext', 'Bazin_îno': 'Bazin_îno', 'Atelier': 'Atelier', 'Cab_medic': 'Cab_medic', 'Total_săl': 'Total_săl', 'Pers_cali': 'Pers_cali', 'Pers_necal': 'Pers_necal', 'Pers_neces': 'Pers_neces', 'Sursă_inf': 'Sursă_inf', 'Data_recep': 'Data_recep', 'Autor': 'Autor', 'circumsc �': 'circumsc �', 'id': 'id', });
lyr_Limitadministrativ_1.set('fieldImages', {'Id': 'Range', 'IFCID': 'Range', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'country': 'TextEdit', 'natLevel': 'TextEdit', 'natLevName': 'TextEdit', 'natCode': 'TextEdit', 'name': 'TextEdit', 'resOfAut': 'TextEdit', 'beginVers': 'DateTime', 'endVersion': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Circumscriptii_2.set('fieldImages', {'fid': 'TextEdit', 'Trup': 'TextEdit', 'Denumire': 'TextEdit', 'Nr_Schimbu': 'TextEdit', 'Schimb_1': 'TextEdit', 'Schimb_2': 'TextEdit', 'Schimb_3': 'TextEdit', 'Nr_săli_o': 'TextEdit', 'Laboratoar': 'TextEdit', 'Săli_clas': 'TextEdit', 'Personal_c': 'TextEdit', 'Personal_n': 'TextEdit', 'Personal_1': 'TextEdit', 'Sector': 'TextEdit', 'Adrese_Lim': 'TextEdit', 'Cod_SIIIR': 'TextEdit', 'Observați': 'TextEdit', 'Autor': 'TextEdit', 'Dată_crea': 'TextEdit', });
lyr_15minute_3.set('fieldImages', {'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'CF': 'TextEdit', 'SIIIR': 'TextEdit', 'Statutul': 'TextEdit', 'Unit_înv': 'TextEdit', 'Observ': 'TextEdit', 'Tip_unit': 'TextEdit', 'Coduri': 'TextEdit', 'Creșă': 'TextEdit', 'Preșcolar': 'TextEdit', 'Primar': 'TextEdit', 'Gimnazial': 'TextEdit', 'Liceal': 'TextEdit', 'Vocaționa': 'TextEdit', 'Profes': 'TextEdit', 'Postliceal': 'TextEdit', 'Uni': 'TextEdit', 'Special': 'TextEdit', 'Club': 'TextEdit', 'Adresă': 'TextEdit', 'Cod_poșta': 'TextEdit', 'Localitate': 'TextEdit', 'Sector': 'TextEdit', 'E_mail': 'TextEdit', 'Website': 'TextEdit', 'Telefon': 'TextEdit', 'Tip_propri': 'TextEdit', 'Nr_elevi': 'TextEdit', 'Schimbul_1': 'TextEdit', 'Schimbul_2': 'TextEdit', 'Schimbul_3': 'TextEdit', 'Mod_funcț': 'TextEdit', 'Nr_schimb': 'TextEdit', 'Săli_clas': 'TextEdit', 'Laborat': 'TextEdit', 'Sală_mese': 'TextEdit', 'Biblio': 'TextEdit', 'Cămin': 'TextEdit', 'Sală_spor': 'TextEdit', 'Teren_ext': 'TextEdit', 'Bazin_îno': 'TextEdit', 'Atelier': 'TextEdit', 'Cab_medic': 'TextEdit', 'Total_săl': 'TextEdit', 'Pers_cali': 'TextEdit', 'Pers_necal': 'TextEdit', 'Pers_neces': 'TextEdit', 'Sursă_inf': 'TextEdit', 'Data_recep': 'TextEdit', 'Autor': 'TextEdit', 'circumsc �': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_10minute_4.set('fieldImages', {'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'CF': 'TextEdit', 'SIIIR': 'TextEdit', 'Statutul': 'TextEdit', 'Unit_înv': 'TextEdit', 'Observ': 'TextEdit', 'Tip_unit': 'TextEdit', 'Coduri': 'TextEdit', 'Creșă': 'TextEdit', 'Preșcolar': 'TextEdit', 'Primar': 'TextEdit', 'Gimnazial': 'TextEdit', 'Liceal': 'TextEdit', 'Vocaționa': 'TextEdit', 'Profes': 'TextEdit', 'Postliceal': 'TextEdit', 'Uni': 'TextEdit', 'Special': 'TextEdit', 'Club': 'TextEdit', 'Adresă': 'TextEdit', 'Cod_poșta': 'TextEdit', 'Localitate': 'TextEdit', 'Sector': 'TextEdit', 'E_mail': 'TextEdit', 'Website': 'TextEdit', 'Telefon': 'TextEdit', 'Tip_propri': 'TextEdit', 'Nr_elevi': 'TextEdit', 'Schimbul_1': 'TextEdit', 'Schimbul_2': 'TextEdit', 'Schimbul_3': 'TextEdit', 'Mod_funcț': 'TextEdit', 'Nr_schimb': 'TextEdit', 'Săli_clas': 'TextEdit', 'Laborat': 'TextEdit', 'Sală_mese': 'TextEdit', 'Biblio': 'TextEdit', 'Cămin': 'TextEdit', 'Sală_spor': 'TextEdit', 'Teren_ext': 'TextEdit', 'Bazin_îno': 'TextEdit', 'Atelier': 'TextEdit', 'Cab_medic': 'TextEdit', 'Total_săl': 'TextEdit', 'Pers_cali': 'TextEdit', 'Pers_necal': 'TextEdit', 'Pers_neces': 'TextEdit', 'Sursă_inf': 'TextEdit', 'Data_recep': 'TextEdit', 'Autor': 'TextEdit', 'circumsc �': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_5minute_5.set('fieldImages', {'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'CF': 'TextEdit', 'SIIIR': 'TextEdit', 'Statutul': 'TextEdit', 'Unit_înv': 'TextEdit', 'Observ': 'TextEdit', 'Tip_unit': 'TextEdit', 'Coduri': 'TextEdit', 'Creșă': 'TextEdit', 'Preșcolar': 'TextEdit', 'Primar': 'TextEdit', 'Gimnazial': 'TextEdit', 'Liceal': 'TextEdit', 'Vocaționa': 'TextEdit', 'Profes': 'TextEdit', 'Postliceal': 'TextEdit', 'Uni': 'TextEdit', 'Special': 'TextEdit', 'Club': 'TextEdit', 'Adresă': 'TextEdit', 'Cod_poșta': 'TextEdit', 'Localitate': 'TextEdit', 'Sector': 'TextEdit', 'E_mail': 'TextEdit', 'Website': 'TextEdit', 'Telefon': 'TextEdit', 'Tip_propri': 'TextEdit', 'Nr_elevi': 'TextEdit', 'Schimbul_1': 'TextEdit', 'Schimbul_2': 'TextEdit', 'Schimbul_3': 'TextEdit', 'Mod_funcț': 'TextEdit', 'Nr_schimb': 'TextEdit', 'Săli_clas': 'TextEdit', 'Laborat': 'TextEdit', 'Sală_mese': 'TextEdit', 'Biblio': 'TextEdit', 'Cămin': 'TextEdit', 'Sală_spor': 'TextEdit', 'Teren_ext': 'TextEdit', 'Bazin_îno': 'TextEdit', 'Atelier': 'TextEdit', 'Cab_medic': 'TextEdit', 'Total_săl': 'TextEdit', 'Pers_cali': 'TextEdit', 'Pers_necal': 'TextEdit', 'Pers_neces': 'TextEdit', 'Sursă_inf': 'TextEdit', 'Data_recep': 'TextEdit', 'Autor': 'TextEdit', 'circumsc �': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Unitidenvmnt_6.set('fieldImages', {'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'CF': 'TextEdit', 'SIIIR': 'TextEdit', 'Statutul': 'TextEdit', 'Unit_înv': 'TextEdit', 'Observ': 'TextEdit', 'Tip_unit': 'TextEdit', 'Coduri': 'TextEdit', 'Creșă': 'TextEdit', 'Preșcolar': 'TextEdit', 'Primar': 'TextEdit', 'Gimnazial': 'TextEdit', 'Liceal': 'TextEdit', 'Vocaționa': 'TextEdit', 'Profes': 'TextEdit', 'Postliceal': 'TextEdit', 'Uni': 'TextEdit', 'Special': 'TextEdit', 'Club': 'TextEdit', 'Adresă': 'TextEdit', 'Cod_poșta': 'TextEdit', 'Localitate': 'TextEdit', 'Sector': 'TextEdit', 'E_mail': 'TextEdit', 'Website': 'TextEdit', 'Telefon': 'TextEdit', 'Tip_propri': 'TextEdit', 'Nr_elevi': 'TextEdit', 'Schimbul_1': 'TextEdit', 'Schimbul_2': 'TextEdit', 'Schimbul_3': 'TextEdit', 'Mod_funcț': 'TextEdit', 'Nr_schimb': 'TextEdit', 'Săli_clas': 'TextEdit', 'Laborat': 'TextEdit', 'Sală_mese': 'TextEdit', 'Biblio': 'TextEdit', 'Cămin': 'TextEdit', 'Sală_spor': 'TextEdit', 'Teren_ext': 'TextEdit', 'Bazin_îno': 'TextEdit', 'Atelier': 'TextEdit', 'Cab_medic': 'TextEdit', 'Total_săl': 'TextEdit', 'Pers_cali': 'TextEdit', 'Pers_necal': 'TextEdit', 'Pers_neces': 'TextEdit', 'Sursă_inf': 'TextEdit', 'Data_recep': 'TextEdit', 'Autor': 'TextEdit', 'circumsc �': 'TextEdit', 'id': 'TextEdit', });
lyr_Limitadministrativ_1.set('fieldLabels', {'Id': 'no label', 'IFCID': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'country': 'no label', 'natLevel': 'no label', 'natLevName': 'no label', 'natCode': 'no label', 'name': 'no label', 'resOfAut': 'no label', 'beginVers': 'no label', 'endVersion': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Circumscriptii_2.set('fieldLabels', {'fid': 'no label', 'Trup': 'no label', 'Denumire': 'no label', 'Nr_Schimbu': 'no label', 'Schimb_1': 'no label', 'Schimb_2': 'no label', 'Schimb_3': 'no label', 'Nr_săli_o': 'no label', 'Laboratoar': 'no label', 'Săli_clas': 'no label', 'Personal_c': 'no label', 'Personal_n': 'no label', 'Personal_1': 'no label', 'Sector': 'no label', 'Adrese_Lim': 'no label', 'Cod_SIIIR': 'no label', 'Observați': 'no label', 'Autor': 'no label', 'Dată_crea': 'no label', });
lyr_15minute_3.set('fieldLabels', {'POINT_X': 'no label', 'POINT_Y': 'no label', 'CF': 'no label', 'SIIIR': 'no label', 'Statutul': 'no label', 'Unit_înv': 'no label', 'Observ': 'no label', 'Tip_unit': 'no label', 'Coduri': 'no label', 'Creșă': 'no label', 'Preșcolar': 'no label', 'Primar': 'no label', 'Gimnazial': 'no label', 'Liceal': 'no label', 'Vocaționa': 'no label', 'Profes': 'no label', 'Postliceal': 'no label', 'Uni': 'no label', 'Special': 'no label', 'Club': 'no label', 'Adresă': 'no label', 'Cod_poșta': 'no label', 'Localitate': 'no label', 'Sector': 'no label', 'E_mail': 'no label', 'Website': 'no label', 'Telefon': 'no label', 'Tip_propri': 'no label', 'Nr_elevi': 'no label', 'Schimbul_1': 'no label', 'Schimbul_2': 'no label', 'Schimbul_3': 'no label', 'Mod_funcț': 'no label', 'Nr_schimb': 'no label', 'Săli_clas': 'no label', 'Laborat': 'no label', 'Sală_mese': 'no label', 'Biblio': 'no label', 'Cămin': 'no label', 'Sală_spor': 'no label', 'Teren_ext': 'no label', 'Bazin_îno': 'no label', 'Atelier': 'no label', 'Cab_medic': 'no label', 'Total_săl': 'no label', 'Pers_cali': 'no label', 'Pers_necal': 'no label', 'Pers_neces': 'no label', 'Sursă_inf': 'no label', 'Data_recep': 'no label', 'Autor': 'no label', 'circumsc �': 'no label', 'id': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_10minute_4.set('fieldLabels', {'POINT_X': 'no label', 'POINT_Y': 'no label', 'CF': 'no label', 'SIIIR': 'no label', 'Statutul': 'no label', 'Unit_înv': 'no label', 'Observ': 'no label', 'Tip_unit': 'no label', 'Coduri': 'no label', 'Creșă': 'no label', 'Preșcolar': 'no label', 'Primar': 'no label', 'Gimnazial': 'no label', 'Liceal': 'no label', 'Vocaționa': 'no label', 'Profes': 'no label', 'Postliceal': 'no label', 'Uni': 'no label', 'Special': 'no label', 'Club': 'no label', 'Adresă': 'no label', 'Cod_poșta': 'no label', 'Localitate': 'no label', 'Sector': 'no label', 'E_mail': 'no label', 'Website': 'no label', 'Telefon': 'no label', 'Tip_propri': 'no label', 'Nr_elevi': 'no label', 'Schimbul_1': 'no label', 'Schimbul_2': 'no label', 'Schimbul_3': 'no label', 'Mod_funcț': 'no label', 'Nr_schimb': 'no label', 'Săli_clas': 'no label', 'Laborat': 'no label', 'Sală_mese': 'no label', 'Biblio': 'no label', 'Cămin': 'no label', 'Sală_spor': 'no label', 'Teren_ext': 'no label', 'Bazin_îno': 'no label', 'Atelier': 'no label', 'Cab_medic': 'no label', 'Total_săl': 'no label', 'Pers_cali': 'no label', 'Pers_necal': 'no label', 'Pers_neces': 'no label', 'Sursă_inf': 'no label', 'Data_recep': 'no label', 'Autor': 'no label', 'circumsc �': 'no label', 'id': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_5minute_5.set('fieldLabels', {'POINT_X': 'no label', 'POINT_Y': 'no label', 'CF': 'no label', 'SIIIR': 'no label', 'Statutul': 'no label', 'Unit_înv': 'no label', 'Observ': 'no label', 'Tip_unit': 'no label', 'Coduri': 'no label', 'Creșă': 'no label', 'Preșcolar': 'no label', 'Primar': 'no label', 'Gimnazial': 'no label', 'Liceal': 'no label', 'Vocaționa': 'no label', 'Profes': 'no label', 'Postliceal': 'no label', 'Uni': 'no label', 'Special': 'no label', 'Club': 'no label', 'Adresă': 'no label', 'Cod_poșta': 'no label', 'Localitate': 'no label', 'Sector': 'no label', 'E_mail': 'no label', 'Website': 'no label', 'Telefon': 'no label', 'Tip_propri': 'no label', 'Nr_elevi': 'no label', 'Schimbul_1': 'no label', 'Schimbul_2': 'no label', 'Schimbul_3': 'no label', 'Mod_funcț': 'no label', 'Nr_schimb': 'no label', 'Săli_clas': 'no label', 'Laborat': 'no label', 'Sală_mese': 'no label', 'Biblio': 'no label', 'Cămin': 'no label', 'Sală_spor': 'no label', 'Teren_ext': 'no label', 'Bazin_îno': 'no label', 'Atelier': 'no label', 'Cab_medic': 'no label', 'Total_săl': 'no label', 'Pers_cali': 'no label', 'Pers_necal': 'no label', 'Pers_neces': 'no label', 'Sursă_inf': 'no label', 'Data_recep': 'no label', 'Autor': 'no label', 'circumsc �': 'no label', 'id': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Unitidenvmnt_6.set('fieldLabels', {'POINT_X': 'no label', 'POINT_Y': 'no label', 'CF': 'no label', 'SIIIR': 'inline label - always visible', 'Statutul': 'no label', 'Unit_înv': 'inline label - always visible', 'Observ': 'no label', 'Tip_unit': 'no label', 'Coduri': 'no label', 'Creșă': 'no label', 'Preșcolar': 'no label', 'Primar': 'no label', 'Gimnazial': 'no label', 'Liceal': 'no label', 'Vocaționa': 'no label', 'Profes': 'no label', 'Postliceal': 'no label', 'Uni': 'no label', 'Special': 'no label', 'Club': 'no label', 'Adresă': 'no label', 'Cod_poșta': 'no label', 'Localitate': 'no label', 'Sector': 'no label', 'E_mail': 'no label', 'Website': 'no label', 'Telefon': 'no label', 'Tip_propri': 'no label', 'Nr_elevi': 'no label', 'Schimbul_1': 'no label', 'Schimbul_2': 'no label', 'Schimbul_3': 'no label', 'Mod_funcț': 'no label', 'Nr_schimb': 'no label', 'Săli_clas': 'no label', 'Laborat': 'no label', 'Sală_mese': 'no label', 'Biblio': 'no label', 'Cămin': 'no label', 'Sală_spor': 'no label', 'Teren_ext': 'no label', 'Bazin_îno': 'no label', 'Atelier': 'no label', 'Cab_medic': 'no label', 'Total_săl': 'no label', 'Pers_cali': 'no label', 'Pers_necal': 'no label', 'Pers_neces': 'no label', 'Sursă_inf': 'no label', 'Data_recep': 'no label', 'Autor': 'no label', 'circumsc �': 'no label', 'id': 'no label', });
lyr_Unitidenvmnt_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});