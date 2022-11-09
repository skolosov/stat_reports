<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeWriting;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Files\LocalTemporaryFile;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;


class XLSXExport implements FromCollection, WithEvents
{
    /**
     * @return Collection
     */
    public function collection()
    {
//        if ($this->calledByEvent) { // flag
//            return $this->myCollectionToExport;
//        }

        return collect([]);
    }

    public function registerEvents(): array
    {
        return [
            BeforeWriting::class => function (BeforeWriting $event) {
                $templateFile = new LocalTemporaryFile(storage_path('app/templates/table.xlsx'));
                $event->writer->reopen($templateFile, Excel::XLSX);

                foreach ($event->writer->getAllSheets() as $sheet) {
                    $this->writeSheet($sheet);
                }

                $event->writer->getSheetByIndex(0)->export($event->getConcernable()); // call the export on the first sheet

                return $event->getWriter()->getSheetByIndex(0);
            },
        ];
    }

    private function writeSheet(Worksheet $sheet)
    {
//        dump($sheet->getColumnIterator());
//        dump($sheet->getRowIterator());
        foreach ($sheet->getRowIterator() as $row) {
            $cellIterator = $row->getCellIterator();
            $cellIterator->setIterateOnlyExistingCells(true); // This loops through all cells,
            //    even if a cell value is not set.
            // For 'TRUE', we loop through cells
            //    only when their value is set.
            // If this method is not called,
            //    the default value is 'false'.
            foreach ($cellIterator as $cell) {
//                dump($cell->getValue(), Str::of($cell->getValue())->test("/^\\$.*$/"));
                if (Str::of($cell->getValue())->test("/^\\$.*$/")) {
                    $cell->setValue("HUI");
                }
            }
        }
//        dd(1);
    }
}
