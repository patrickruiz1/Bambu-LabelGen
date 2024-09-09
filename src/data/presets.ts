import LabelPreset from '@/types/LabelPreset'

const presets: { [key: string]: LabelPreset | 'spacer' } = {
    // /* Blank/Starter preset */
    // 'Default': {
    //     text: {
    //         brand: '',
    //         type: '',
    //         diameter: '',
    //         length: '',
    //         temp: '',
    //         weight: ''
    //     },
    //     graphics: {
    //         logo: 'Bambu Lab'
    //     }
    // },
    
    /* Bambu Lab */
    '': 'spacer',
    '⸻ Bambu Lab ⸻': 'spacer',
    
    'Bambu PLA Basic': {
        text: {
            brand: 'Bambu',
            type: 'PLA Basic',
            diameter: '1.75 ± 0.03 mm',
            length: 'NA',
            temp: '190 - 230',
            weight: '1 kg'
        },
        sizing: {
            brand_font_percent: '100',
            type_font_percent: '100', 
            fil_info_font_percent: '100',
            fil_colour_name_font_percent: '100'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    'Bambu PLA Silk': {
        text: {
            brand: 'Bambu',
            type: 'PLA Silk',
            diameter: '1.75 ± 0.03 mm',
            length: 'NA',
            temp: '210 - 230',
            weight: '1 kg'
        },
        sizing: {
            brand_font_percent: '100',
            type_font_percent: '100', 
            fil_info_font_percent: '100',
            fil_colour_name_font_percent: '100'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    'Bambu PETG HF': {
        text: {
            brand: 'Bambu',
            type: 'PETG HF',
            diameter: '1.75 ± 0.03 mm',
            length: '325 m',
            temp: '230 - 260',
            weight: '1 kg'
        },
        sizing: {
            brand_font_percent: '100',
            type_font_percent: '100', 
            fil_info_font_percent: '100',
            fil_colour_name_font_percent: '100'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    'Bambu PETG Translucent': {
        text: {
            brand: 'Bambu',
            type: 'PETG Translucent',
            diameter: '1.75 ± 0.03 mm',
            length: '330 m',
            temp: '230 - 260',
            weight: '1 kg'
        },
        sizing: {
            brand_font_percent: '100',
            type_font_percent: '70', 
            fil_info_font_percent: '100',
            fil_colour_name_font_percent: '100'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    
    /* Polymaker */
    '': 'spacer',
    '⸻ Polymaker ⸻': 'spacer',
    
    'Polymaker PLA Matte': {
        text: {
            brand: 'Polymaker',
            type: 'PLA Matte',
            diameter: '1.75 ± 0.03 mm',
            length: 'NA',
            temp: '190 - 230', 
            weight: '1 kg'
        },
        sizing: {
            brand_font_percent: '100',
            type_font_percent: '100', 
            fil_info_font_percent: '100',
            fil_colour_name_font_percent: '100'
        },
        graphics: {
            logo: 'Polymaker'
        }
    },
    
    /* Overture */
    '': 'spacer',
    '⸻ Overture ⸻': 'spacer',
    
    'Overture PLA Basic': {
        text: {
            brand: 'Overture',
            type: 'PLA Basic',
            diameter: '1.75 ± 0.03 mm',
            length: 'NA',
            temp: '190 - 230', 
            weight: '1 kg'
        },
        sizing: {
            brand_font_percent: '100',
            type_font_percent: '100', 
            fil_info_font_percent: '100',
            fil_colour_name_font_percent: '100'
        },
        graphics: {
            logo: 'Overture'
        }
    },
    
    /* Elegoo */
    '': 'spacer', 
    '⸻ Elegoo ⸻': 'spacer',
    
    'Elegoo PLA Basic': {
        text: {
            brand: 'Elegoo', 
            type: 'PLA Basic', 
            diameter: '1.75 ± 0.02 mm',
            length: 'NA', 
            temp: '190 - 230', 
            weight: '1 kg'
        },
        sizing: {
            brand_font_percent: '100',
            type_font_percent: '100', 
            fil_info_font_percent: '100',
            fil_colour_name_font_percent: '100'
        },
        graphics: {
            logo: 'Elegoo'
        }
    }
    
    
}

export default presets