import LabelData from '@/types/LabelData'

export default interface LabelPreset {
    text: {
        brand: LabelData['text']['brand'],
        type: LabelData['text']['type'],
        diameter: LabelData['text']['diameter'],
        length: LabelData['text']['length'],
        temp: LabelData['text']['temp'],
        weight: LabelData['text']['weight']
    },
    sizing: {
        brand_font_percent: LabelData['text']['brand_font_percent'],
        type_font_percent: LabelData['text']['type_font_percent'],
        fil_info_font_percent: LabelData['text']['fil_info_font_percent'],
        fil_colour_name_font_percent: LabelData['text']['fil_colour_name_font_percent']
    }
    graphics: {
        logo: LabelData['graphics']['logo']
    }
}