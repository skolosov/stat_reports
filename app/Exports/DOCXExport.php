<?php

namespace App\Exports;

use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpWord\Exception\CopyFileException;
use PhpOffice\PhpWord\Exception\CreateTemporaryFileException;
use PhpOffice\PhpWord\IOFactory;
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\TemplateProcessor;

class DOCXExport
{
    private string $templateFile;
    private string $outputFile;
    private string $path;

    private array $data;

    public function __construct(string $path, string $templateFile, string $outputFile = 'tmp.docx')
    {
        $this->path = $path;
        $this->templateFile = $templateFile;
        $this->outputFile = $outputFile;
        $this->data = [
            'name' => 'skolosov',
            'addr' => 'луна',
            'tel' => '+7 777 777 77 77',
            'HUI' => 'HUI',
        ];
        $this->export();
    }

    private function export()
    {
        try {
            $document = new TemplateProcessor("$this->path/$this->templateFile");
            foreach ($document->getVariables() as $variable) {
                $document->setValue($variable, $this->data[$variable]);
            }
            $saveFileName = "$this->path/$this->outputFile";
            $document->saveAs($saveFileName);

//download code
            header('Content-Description: File Transfer');
            header("Content-Type: application/docx");//header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename='.$this->outputFile);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Content-Length: ' . filesize($saveFileName));
            readfile($saveFileName);
            unlink($saveFileName); // deletes the temporary file
            exit;
        } catch (CopyFileException $e) {
        } catch (CreateTemporaryFileException $e) {
            throw new Exception($e->getMessage());
        }
    }
}
